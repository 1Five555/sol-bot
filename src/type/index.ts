import {BN} from "@coral-xyz/anchor";

export interface PayParams {
    amount: BN;
    isSol: boolean;
    slippage: BN;
    pumpupFeeRate: BN;
    pool_sol_amount: BN;
    pool_token_amount: BN;
}
export interface BuyWithSlippage {
    buyTokenAmount: BN;
    maxSolAmount: BN;
}