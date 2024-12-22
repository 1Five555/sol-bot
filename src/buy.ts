import * as anchor from '@coral-xyz/anchor';
import {
    PublicKey,
    SystemProgram,
    Connection,
    clusterApiUrl,
    Keypair,
    SYSVAR_RENT_PUBKEY,
    LAMPORTS_PER_SOL,
    Transaction, GetVersionedTransactionConfig
} from "@solana/web3.js";
import { ASSOCIATED_TOKEN_PROGRAM_ID, getAssociatedTokenAddressSync, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import bs58 from "bs58";
import {BN} from "@coral-xyz/anchor";
import {Pumpup} from "./program/pumpup.ts";
import PumpupIDL from "./program/pumpup.json"
import {PayParams,BuyWithSlippage} from "./type";


const DENOMINATOR_VALUE = new anchor.BN(100);
const SLIPPAGE = 5
const FEE_RATE =1
const SECRET_KEY = '2znoHYVvmZfWb4fj6EaymCiHzuoTWXgV1vJeAHmHTezUVFKMBoYnhGJRPJmi7iPiV4SBFG6qAdFbdJ27PmCNDbuX'
const SECRET_ARRAY =  bs58.decode(SECRET_KEY)
const keypair = Keypair.fromSecretKey(SECRET_ARRAY)
const clusterUrl = "devnet"
const connection: Connection = new Connection(clusterApiUrl(clusterUrl),'confirmed')
const getProvider = ()=>{

    const wallet = new anchor.Wallet(keypair)
    return new anchor.AnchorProvider(connection,wallet,{commitment:"processed"})
}
function calculate_swap_amount_in(
    source_amount: BN,
    swap_source_amount: BN,
    swap_destination_amount: BN,
): BN {
    // (x + delta_x) * (y - delta_y) = x * y
    // delta_y = (delta_x * y) / (x + delta_x)
    const numerator = source_amount.mul(swap_destination_amount);
    const denominator = swap_source_amount.add(source_amount);
     return numerator.div(denominator);

}

function calculate_swap_amount_out(
    destination_amount: BN,
    swap_source_amount: BN,
    swap_destination_amount: BN,
): BN {
    // (x + delta_x) * (y - delta_y) = x * y
    // delta_x = (x * delta_y) / (y - delta_y)
    const numerator = swap_source_amount.mul(destination_amount);
    const denominator = swap_destination_amount
        .sub(destination_amount);
    return numerator.div(denominator);

}
function getBuyParamsWithSlippage(params: PayParams): BuyWithSlippage {

    // maxSolAmount = amount * (1 + slipage/100) * (1 + feeRate/100)
    let maxSolAmount: BN;
    let swapTokenAmount: BN;
    if (params.isSol) {
        swapTokenAmount = calculate_swap_amount_in(params.amount, params.pool_sol_amount, params.pool_token_amount);
        if (swapTokenAmount.eq(new BN(0))) {
            console.warn("swapTokenAmount == new BN(0)");
        }
        maxSolAmount = params.amount.mul(params.slippage.add(DENOMINATOR_VALUE)).div(DENOMINATOR_VALUE)
            .mul(params.pumpupFeeRate.add(DENOMINATOR_VALUE)).div(DENOMINATOR_VALUE);
    } else {
        swapTokenAmount = params.amount;
        let swap_sol_amount = calculate_swap_amount_out(params.amount, params.pool_sol_amount, params.pool_token_amount);
        maxSolAmount = swap_sol_amount.mul(params.slippage.add(DENOMINATOR_VALUE)).div(DENOMINATOR_VALUE)
            .mul(params.pumpupFeeRate.add(DENOMINATOR_VALUE)).div(DENOMINATOR_VALUE);
    }
    return {
        buyTokenAmount: swapTokenAmount,
        maxSolAmount: maxSolAmount,
    }
}
async function buyTokens(
    program: anchor.Program,
    mint: PublicKey,
    lamports: anchor.BN,
    user:PublicKey
) {
    try {
        const configSeed = Buffer.from("pumpup.config");
        const [config] = PublicKey.findProgramAddressSync([configSeed], program.programId);

        const poolSeed = Buffer.from("pumpup.pool");
        const [poolSolAccount] =  PublicKey.findProgramAddressSync([poolSeed,mint.toBuffer()], program.programId);
        console.log('poolSolAccount', poolSolAccount);
        console.log("mint",mint)
        const poolTokenAccount = getAssociatedTokenAddressSync(mint,poolSolAccount,true,TOKEN_PROGRAM_ID);
        const userTokenAccount = getAssociatedTokenAddressSync(mint,user,false,TOKEN_PROGRAM_ID)
        const pumpupFee = new PublicKey("4sRLqSqq7PqSBTMh4vatLF2Lfb152xGt2wKSe8CdaPnZ")//替换成你的手续费账户
        const bondingCurve = await program.account.bondingCurve.fetch(poolSolAccount,'confirmed');
        console.log("poolTokenAccount", poolTokenAccount);
        console.log("userTokenAccount", userTokenAccount);
        console.log("pumpupFee", pumpupFee);
        console.log('config',config)
        console.log('bondingCurve',bondingCurve)
        const buyParams = getBuyParamsWithSlippage({
            amount: lamports,
            isSol: true,
            slippage: new BN(SLIPPAGE),
            pumpupFeeRate: new BN(FEE_RATE),
            pool_sol_amount: bondingCurve.poolSolReserves,
            pool_token_amount: bondingCurve.poolTokenReserves
        })
        console.log('buyParams',buyParams)
        const tx = await program.methods.buy(buyParams.buyTokenAmount, buyParams.maxSolAmount)
            .accountsPartial({
                config:config[0],
                mint,
                poolTokenAccount,
                poolSolAccount,
                pumpupFee,
                userTokenAccount,
                user,
                systemProgram: SystemProgram.programId,
                tokenProgram: TOKEN_PROGRAM_ID,
                associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID
            }).signers([keypair])
            .transaction()

        console.log("交易签名:", tx);
        const signature = await program.provider.sendAndConfirm(tx)
        console.log("signature", signature)
    } catch (error) {
        console.error("购买出错:", error);
    }
}


async function main() {
    const provider = getProvider();
    const program = new anchor.Program(PumpupIDL as Pumpup, provider);
    console.log("Wallet PublicKey:", provider.wallet.publicKey.toString());
    const productPublicKey = new PublicKey("91m1yM6MZ8BeVc68QdXEs4pm8wwB5MEXEZmPZUByegJF"); // 替换为实际的产品 PublicKey
    const quantity = new anchor.BN(1);
    const tokenMInt =new  PublicKey('3FHZCNngu3fZmdR7E3DCx4nH9tPecGBHEqEDBvJvSEup')
    const buyAmount = new anchor.BN(1000000);
    buyTokens(program,tokenMInt,buyAmount,provider.wallet.publicKey)
}

main().catch(console.error);

