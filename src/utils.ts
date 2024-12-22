
export function hexToUint8Array(base58PrivateKey: string): Uint8Array {
    return Buffer.from(base58PrivateKey, 'base58');
}