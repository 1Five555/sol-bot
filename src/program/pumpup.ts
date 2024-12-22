/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/pumpup.json`.
 */
export type Pumpup = {
    "address": "AvMao5VBhc4wxocs2WYx4cJsgHSE615UonVkkDp3BhrF",
    "metadata": {
        "name": "pumpup",
        "version": "0.1.0",
        "spec": "0.1.0",
        "description": "Created with Anchor"
    },
    "instructions": [
        {
            "name": "buy",
            "discriminator": [
                102,
                6,
                61,
                18,
                1,
                218,
                235,
                234
            ],
            "accounts": [
                {
                    "name": "config",
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    112,
                                    117,
                                    109,
                                    112,
                                    117,
                                    112,
                                    46,
                                    99,
                                    111,
                                    110,
                                    102,
                                    105,
                                    103
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "mint"
                },
                {
                    "name": "poolTokenAccount",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account",
                                "path": "poolSolAccount"
                            },
                            {
                                "kind": "const",
                                "value": [
                                    6,
                                    221,
                                    246,
                                    225,
                                    215,
                                    101,
                                    161,
                                    147,
                                    217,
                                    203,
                                    225,
                                    70,
                                    206,
                                    235,
                                    121,
                                    172,
                                    28,
                                    180,
                                    133,
                                    237,
                                    95,
                                    91,
                                    55,
                                    145,
                                    58,
                                    140,
                                    245,
                                    133,
                                    126,
                                    255,
                                    0,
                                    169
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "mint"
                            }
                        ],
                        "program": {
                            "kind": "const",
                            "value": [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ]
                        }
                    }
                },
                {
                    "name": "poolSolAccount",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    112,
                                    117,
                                    109,
                                    112,
                                    117,
                                    112,
                                    46,
                                    112,
                                    111,
                                    111,
                                    108
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "mint"
                            }
                        ]
                    }
                },
                {
                    "name": "pumpupFee",
                    "writable": true
                },
                {
                    "name": "userTokenAccount",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account",
                                "path": "user"
                            },
                            {
                                "kind": "const",
                                "value": [
                                    6,
                                    221,
                                    246,
                                    225,
                                    215,
                                    101,
                                    161,
                                    147,
                                    217,
                                    203,
                                    225,
                                    70,
                                    206,
                                    235,
                                    121,
                                    172,
                                    28,
                                    180,
                                    133,
                                    237,
                                    95,
                                    91,
                                    55,
                                    145,
                                    58,
                                    140,
                                    245,
                                    133,
                                    126,
                                    255,
                                    0,
                                    169
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "mint"
                            }
                        ],
                        "program": {
                            "kind": "const",
                            "value": [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ]
                        }
                    }
                },
                {
                    "name": "user",
                    "writable": true,
                    "signer": true
                },
                {
                    "name": "systemProgram",
                    "address": "11111111111111111111111111111111"
                },
                {
                    "name": "tokenProgram",
                    "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                },
                {
                    "name": "associatedTokenProgram",
                    "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
                }
            ],
            "args": [
                {
                    "name": "tokenAmount",
                    "type": "u64"
                },
                {
                    "name": "maxSolAmount",
                    "type": "u64"
                }
            ]
        },
        {
            "name": "create",
            "discriminator": [
                24,
                30,
                200,
                40,
                5,
                28,
                7,
                119
            ],
            "accounts": [
                {
                    "name": "config",
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    112,
                                    117,
                                    109,
                                    112,
                                    117,
                                    112,
                                    46,
                                    99,
                                    111,
                                    110,
                                    102,
                                    105,
                                    103
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "creator",
                    "writable": true,
                    "signer": true
                },
                {
                    "name": "mint",
                    "writable": true,
                    "signer": true
                },
                {
                    "name": "mintAuthority",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    112,
                                    117,
                                    109,
                                    112,
                                    117,
                                    112,
                                    46,
                                    109,
                                    105,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "poolSolAccount",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    112,
                                    117,
                                    109,
                                    112,
                                    117,
                                    112,
                                    46,
                                    112,
                                    111,
                                    111,
                                    108
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "mint"
                            }
                        ]
                    }
                },
                {
                    "name": "poolTokenAccount",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account",
                                "path": "poolSolAccount"
                            },
                            {
                                "kind": "const",
                                "value": [
                                    6,
                                    221,
                                    246,
                                    225,
                                    215,
                                    101,
                                    161,
                                    147,
                                    217,
                                    203,
                                    225,
                                    70,
                                    206,
                                    235,
                                    121,
                                    172,
                                    28,
                                    180,
                                    133,
                                    237,
                                    95,
                                    91,
                                    55,
                                    145,
                                    58,
                                    140,
                                    245,
                                    133,
                                    126,
                                    255,
                                    0,
                                    169
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "mint"
                            }
                        ],
                        "program": {
                            "kind": "const",
                            "value": [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ]
                        }
                    }
                },
                {
                    "name": "metadataAccount",
                    "writable": true
                },
                {
                    "name": "rent",
                    "address": "SysvarRent111111111111111111111111111111111"
                },
                {
                    "name": "tokenProgram",
                    "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                },
                {
                    "name": "associatedTokenProgram",
                    "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
                },
                {
                    "name": "tokenMetadataProgram",
                    "address": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
                },
                {
                    "name": "systemProgram",
                    "address": "11111111111111111111111111111111"
                }
            ],
            "args": [
                {
                    "name": "name",
                    "type": "string"
                },
                {
                    "name": "symbol",
                    "type": "string"
                },
                {
                    "name": "uri",
                    "type": "string"
                }
            ]
        },
        {
            "name": "feedData",
            "discriminator": [
                27,
                192,
                41,
                131,
                235,
                142,
                91,
                66
            ],
            "accounts": [
                {
                    "name": "config",
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    112,
                                    117,
                                    109,
                                    112,
                                    117,
                                    112,
                                    46,
                                    99,
                                    111,
                                    110,
                                    102,
                                    105,
                                    103
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "original",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    112,
                                    117,
                                    109,
                                    112,
                                    117,
                                    112,
                                    46,
                                    111,
                                    114,
                                    105,
                                    103,
                                    105,
                                    110,
                                    97,
                                    108,
                                    46,
                                    100,
                                    97,
                                    116,
                                    97
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "mint"
                },
                {
                    "name": "aiSuckingAccount",
                    "writable": true,
                    "signer": true
                },
                {
                    "name": "systemProgram",
                    "address": "11111111111111111111111111111111"
                }
            ],
            "args": [
                {
                    "name": "datas",
                    "type": {
                        "array": [
                            "f64",
                            33
                        ]
                    }
                }
            ]
        },
        {
            "name": "feedDone",
            "discriminator": [
                183,
                168,
                78,
                242,
                4,
                6,
                93,
                160
            ],
            "accounts": [
                {
                    "name": "config",
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    112,
                                    117,
                                    109,
                                    112,
                                    117,
                                    112,
                                    46,
                                    99,
                                    111,
                                    110,
                                    102,
                                    105,
                                    103
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "original",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    112,
                                    117,
                                    109,
                                    112,
                                    117,
                                    112,
                                    46,
                                    111,
                                    114,
                                    105,
                                    103,
                                    105,
                                    110,
                                    97,
                                    108,
                                    46,
                                    100,
                                    97,
                                    116,
                                    97
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "aiSuckingAccount",
                    "writable": true,
                    "signer": true
                }
            ],
            "args": []
        },
        {
            "name": "feedStart",
            "discriminator": [
                43,
                135,
                163,
                130,
                60,
                48,
                234,
                3
            ],
            "accounts": [
                {
                    "name": "config",
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    112,
                                    117,
                                    109,
                                    112,
                                    117,
                                    112,
                                    46,
                                    99,
                                    111,
                                    110,
                                    102,
                                    105,
                                    103
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "original",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    112,
                                    117,
                                    109,
                                    112,
                                    117,
                                    112,
                                    46,
                                    111,
                                    114,
                                    105,
                                    103,
                                    105,
                                    110,
                                    97,
                                    108,
                                    46,
                                    100,
                                    97,
                                    116,
                                    97
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "aiSuckingAccount",
                    "writable": true,
                    "signer": true
                }
            ],
            "args": []
        },
        {
            "name": "initialize",
            "discriminator": [
                175,
                175,
                109,
                31,
                13,
                152,
                155,
                237
            ],
            "accounts": [
                {
                    "name": "config",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    112,
                                    117,
                                    109,
                                    112,
                                    117,
                                    112,
                                    46,
                                    99,
                                    111,
                                    110,
                                    102,
                                    105,
                                    103
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "feeAddress",
                    "docs": [
                        "CHECK"
                    ],
                    "writable": true
                },
                {
                    "name": "suckingAddress",
                    "docs": [
                        "CHECK"
                    ],
                    "writable": true
                },
                {
                    "name": "migrationAddress",
                    "docs": [
                        "CHECK"
                    ],
                    "writable": true
                },
                {
                    "name": "original",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    112,
                                    117,
                                    109,
                                    112,
                                    117,
                                    112,
                                    46,
                                    111,
                                    114,
                                    105,
                                    103,
                                    105,
                                    110,
                                    97,
                                    108,
                                    46,
                                    100,
                                    97,
                                    116,
                                    97
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "mintAuthority",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    112,
                                    117,
                                    109,
                                    112,
                                    117,
                                    112,
                                    46,
                                    109,
                                    105,
                                    110,
                                    116,
                                    95,
                                    97,
                                    117,
                                    116,
                                    104,
                                    111,
                                    114,
                                    105,
                                    116,
                                    121
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "authorityAddress",
                    "writable": true,
                    "signer": true
                },
                {
                    "name": "rent",
                    "address": "SysvarRent111111111111111111111111111111111"
                },
                {
                    "name": "systemProgram",
                    "address": "11111111111111111111111111111111"
                }
            ],
            "args": [
                {
                    "name": "feeRate",
                    "type": "u64"
                },
                {
                    "name": "aiGasFee",
                    "type": "u64"
                }
            ]
        },
        {
            "name": "sell",
            "discriminator": [
                51,
                230,
                133,
                164,
                1,
                127,
                131,
                173
            ],
            "accounts": [
                {
                    "name": "config",
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    112,
                                    117,
                                    109,
                                    112,
                                    117,
                                    112,
                                    46,
                                    99,
                                    111,
                                    110,
                                    102,
                                    105,
                                    103
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "mint"
                },
                {
                    "name": "poolTokenAccount",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account",
                                "path": "poolSolAccount"
                            },
                            {
                                "kind": "const",
                                "value": [
                                    6,
                                    221,
                                    246,
                                    225,
                                    215,
                                    101,
                                    161,
                                    147,
                                    217,
                                    203,
                                    225,
                                    70,
                                    206,
                                    235,
                                    121,
                                    172,
                                    28,
                                    180,
                                    133,
                                    237,
                                    95,
                                    91,
                                    55,
                                    145,
                                    58,
                                    140,
                                    245,
                                    133,
                                    126,
                                    255,
                                    0,
                                    169
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "mint"
                            }
                        ],
                        "program": {
                            "kind": "const",
                            "value": [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ]
                        }
                    }
                },
                {
                    "name": "poolSolAccount",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    112,
                                    117,
                                    109,
                                    112,
                                    117,
                                    112,
                                    46,
                                    112,
                                    111,
                                    111,
                                    108
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "mint"
                            }
                        ]
                    }
                },
                {
                    "name": "pumpupFee",
                    "writable": true
                },
                {
                    "name": "userTokenAccount",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account",
                                "path": "user"
                            },
                            {
                                "kind": "const",
                                "value": [
                                    6,
                                    221,
                                    246,
                                    225,
                                    215,
                                    101,
                                    161,
                                    147,
                                    217,
                                    203,
                                    225,
                                    70,
                                    206,
                                    235,
                                    121,
                                    172,
                                    28,
                                    180,
                                    133,
                                    237,
                                    95,
                                    91,
                                    55,
                                    145,
                                    58,
                                    140,
                                    245,
                                    133,
                                    126,
                                    255,
                                    0,
                                    169
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "mint"
                            }
                        ],
                        "program": {
                            "kind": "const",
                            "value": [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ]
                        }
                    }
                },
                {
                    "name": "user",
                    "writable": true,
                    "signer": true
                },
                {
                    "name": "systemProgram",
                    "address": "11111111111111111111111111111111"
                },
                {
                    "name": "tokenProgram",
                    "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                },
                {
                    "name": "associatedTokenProgram",
                    "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
                }
            ],
            "args": [
                {
                    "name": "tokenAmount",
                    "type": "u64"
                },
                {
                    "name": "minSolAmount",
                    "type": "u64"
                }
            ]
        },
        {
            "name": "sucking",
            "discriminator": [
                115,
                19,
                175,
                187,
                49,
                92,
                209,
                161
            ],
            "accounts": [
                {
                    "name": "config",
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    112,
                                    117,
                                    109,
                                    112,
                                    117,
                                    112,
                                    46,
                                    99,
                                    111,
                                    110,
                                    102,
                                    105,
                                    103
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "mint"
                },
                {
                    "name": "poolTokenAccount",
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account",
                                "path": "poolSolAccount"
                            },
                            {
                                "kind": "account",
                                "path": "tokenProgram"
                            },
                            {
                                "kind": "account",
                                "path": "mint"
                            }
                        ],
                        "program": {
                            "kind": "const",
                            "value": [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ]
                        }
                    }
                },
                {
                    "name": "poolSolAccount",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    112,
                                    117,
                                    109,
                                    112,
                                    117,
                                    112,
                                    46,
                                    112,
                                    111,
                                    111,
                                    108
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "mint"
                            }
                        ]
                    }
                },
                {
                    "name": "original",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    112,
                                    117,
                                    109,
                                    112,
                                    117,
                                    112,
                                    46,
                                    111,
                                    114,
                                    105,
                                    103,
                                    105,
                                    110,
                                    97,
                                    108,
                                    46,
                                    100,
                                    97,
                                    116,
                                    97
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "aiSuckingAccount",
                    "writable": true,
                    "signer": true
                },
                {
                    "name": "tokenProgram",
                    "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                },
                {
                    "name": "associatedTokenProgram",
                    "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
                },
                {
                    "name": "systemProgram",
                    "address": "11111111111111111111111111111111"
                }
            ],
            "args": [
                {
                    "name": "suckingRate",
                    "type": "u64"
                }
            ]
        },
        {
            "name": "suckingDone",
            "discriminator": [
                35,
                6,
                236,
                47,
                51,
                159,
                208,
                0
            ],
            "accounts": [
                {
                    "name": "config",
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    112,
                                    117,
                                    109,
                                    112,
                                    117,
                                    112,
                                    46,
                                    99,
                                    111,
                                    110,
                                    102,
                                    105,
                                    103
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "original",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    112,
                                    117,
                                    109,
                                    112,
                                    117,
                                    112,
                                    46,
                                    111,
                                    114,
                                    105,
                                    103,
                                    105,
                                    110,
                                    97,
                                    108,
                                    46,
                                    100,
                                    97,
                                    116,
                                    97
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "aiSuckingAccount",
                    "writable": true,
                    "signer": true
                }
            ],
            "args": []
        },
        {
            "name": "transfusion",
            "discriminator": [
                134,
                166,
                146,
                94,
                78,
                86,
                132,
                97
            ],
            "accounts": [
                {
                    "name": "config",
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    112,
                                    117,
                                    109,
                                    112,
                                    117,
                                    112,
                                    46,
                                    99,
                                    111,
                                    110,
                                    102,
                                    105,
                                    103
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "mint"
                },
                {
                    "name": "poolTokenAccount",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account",
                                "path": "poolSolAccount"
                            },
                            {
                                "kind": "account",
                                "path": "tokenProgram"
                            },
                            {
                                "kind": "account",
                                "path": "mint"
                            }
                        ],
                        "program": {
                            "kind": "const",
                            "value": [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ]
                        }
                    }
                },
                {
                    "name": "poolSolAccount",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    112,
                                    117,
                                    109,
                                    112,
                                    117,
                                    112,
                                    46,
                                    112,
                                    111,
                                    111,
                                    108
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "mint"
                            }
                        ]
                    }
                },
                {
                    "name": "pumpupFee",
                    "writable": true
                },
                {
                    "name": "aiTokenAccount",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account",
                                "path": "aiSuckingAccount"
                            },
                            {
                                "kind": "account",
                                "path": "tokenProgram"
                            },
                            {
                                "kind": "account",
                                "path": "mint"
                            }
                        ],
                        "program": {
                            "kind": "const",
                            "value": [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ]
                        }
                    }
                },
                {
                    "name": "original",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    112,
                                    117,
                                    109,
                                    112,
                                    117,
                                    112,
                                    46,
                                    111,
                                    114,
                                    105,
                                    103,
                                    105,
                                    110,
                                    97,
                                    108,
                                    46,
                                    100,
                                    97,
                                    116,
                                    97
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "aiSuckingAccount",
                    "writable": true,
                    "signer": true
                },
                {
                    "name": "systemProgram",
                    "address": "11111111111111111111111111111111"
                },
                {
                    "name": "tokenProgram",
                    "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                },
                {
                    "name": "associatedTokenProgram",
                    "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
                }
            ],
            "args": []
        },
        {
            "name": "withdraw",
            "discriminator": [
                183,
                18,
                70,
                156,
                148,
                109,
                161,
                34
            ],
            "accounts": [
                {
                    "name": "config",
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    112,
                                    117,
                                    109,
                                    112,
                                    117,
                                    112,
                                    46,
                                    99,
                                    111,
                                    110,
                                    102,
                                    105,
                                    103
                                ]
                            }
                        ]
                    }
                },
                {
                    "name": "mint"
                },
                {
                    "name": "poolTokenAccount",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account",
                                "path": "poolSolAccount"
                            },
                            {
                                "kind": "account",
                                "path": "tokenProgram"
                            },
                            {
                                "kind": "account",
                                "path": "mint"
                            }
                        ],
                        "program": {
                            "kind": "const",
                            "value": [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ]
                        }
                    }
                },
                {
                    "name": "poolSolAccount",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "const",
                                "value": [
                                    112,
                                    117,
                                    109,
                                    112,
                                    117,
                                    112,
                                    46,
                                    112,
                                    111,
                                    111,
                                    108
                                ]
                            },
                            {
                                "kind": "account",
                                "path": "mint"
                            }
                        ]
                    }
                },
                {
                    "name": "toTokenAccount",
                    "writable": true,
                    "pda": {
                        "seeds": [
                            {
                                "kind": "account",
                                "path": "toSolAccount"
                            },
                            {
                                "kind": "account",
                                "path": "tokenProgram"
                            },
                            {
                                "kind": "account",
                                "path": "mint"
                            }
                        ],
                        "program": {
                            "kind": "const",
                            "value": [
                                140,
                                151,
                                37,
                                143,
                                78,
                                36,
                                137,
                                241,
                                187,
                                61,
                                16,
                                41,
                                20,
                                142,
                                13,
                                131,
                                11,
                                90,
                                19,
                                153,
                                218,
                                255,
                                16,
                                132,
                                4,
                                142,
                                123,
                                216,
                                219,
                                233,
                                248,
                                89
                            ]
                        }
                    }
                },
                {
                    "name": "pumpupFee",
                    "writable": true
                },
                {
                    "name": "toSolAccount",
                    "writable": true,
                    "signer": true
                },
                {
                    "name": "rent",
                    "address": "SysvarRent111111111111111111111111111111111"
                },
                {
                    "name": "systemProgram",
                    "address": "11111111111111111111111111111111"
                },
                {
                    "name": "tokenProgram",
                    "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
                },
                {
                    "name": "associatedTokenProgram",
                    "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
                }
            ],
            "args": []
        }
    ],
    "accounts": [
        {
            "name": "aiOriginalDataAccount",
            "discriminator": [
                125,
                158,
                65,
                141,
                197,
                244,
                39,
                160
            ]
        },
        {
            "name": "bondingCurve",
            "discriminator": [
                23,
                183,
                248,
                55,
                96,
                216,
                172,
                96
            ]
        },
        {
            "name": "pumpupConfiguration",
            "discriminator": [
                36,
                175,
                125,
                65,
                27,
                3,
                84,
                217
            ]
        }
    ],
    "events": [
        {
            "name": "createMintEvent",
            "discriminator": [
                239,
                193,
                191,
                44,
                156,
                194,
                85,
                141
            ]
        },
        {
            "name": "suckingEvent",
            "discriminator": [
                145,
                33,
                210,
                16,
                189,
                145,
                165,
                103
            ]
        },
        {
            "name": "tradeEvent",
            "discriminator": [
                189,
                219,
                127,
                211,
                78,
                230,
                97,
                238
            ]
        }
    ],
    "errors": [
        {
            "code": 6000,
            "name": "duplicateConfigInitialize",
            "msg": "Duplicate config initialize"
        },
        {
            "code": 6001,
            "name": "duplicateTokenNotAllowed",
            "msg": "Duplicate tokens are not allowed"
        },
        {
            "code": 6002,
            "name": "invalidMetadataAccount",
            "msg": "invalid metadata account"
        },
        {
            "code": 6003,
            "name": "invalidAmount",
            "msg": "Invalid amount: the amount needs to be greater than 0"
        },
        {
            "code": 6004,
            "name": "invalidFeeRate",
            "msg": "Invalid fee rate: the fee rate must range from 0 to 100"
        },
        {
            "code": 6005,
            "name": "invalidAiGasFee",
            "msg": "Invalid AI gas fee: the AI gas fee needs to be greater than 0"
        },
        {
            "code": 6006,
            "name": "tooMuchSolSpendToBuyToken",
            "msg": "slippage: Too much SOL required to buy the given amount of tokens"
        },
        {
            "code": 6007,
            "name": "tooLittleSolReceiveToSellToken",
            "msg": "slippage: Too little SOL received to sell the given amount of tokens"
        },
        {
            "code": 6008,
            "name": "zeroTradingTokens",
            "msg": "Given pool token amount results in zero trading tokens"
        },
        {
            "code": 6009,
            "name": "bondingCurveCompleted",
            "msg": "The bonding curve has completed and liquidity migrated to raydium."
        },
        {
            "code": 6010,
            "name": "bondingCurveNotCompletedOrWithdrawCompleted",
            "msg": "The bonding curve has not completed, or the withdrawal has been completed."
        }
    ],
    "types": [
        {
            "name": "aiOriginalData",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "mint",
                        "type": "pubkey"
                    },
                    {
                        "name": "sucking",
                        "type": "bool"
                    },
                    {
                        "name": "transfusion",
                        "type": "bool"
                    },
                    {
                        "name": "datas",
                        "type": {
                            "array": [
                                "f64",
                                33
                            ]
                        }
                    }
                ]
            }
        },
        {
            "name": "aiOriginalDataAccount",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "bump",
                        "type": "u8"
                    },
                    {
                        "name": "maxLength",
                        "type": "u64"
                    },
                    {
                        "name": "suckingAmount",
                        "type": "u64"
                    },
                    {
                        "name": "status",
                        "type": {
                            "defined": {
                                "name": "aiOriginalDataStatus"
                            }
                        }
                    },
                    {
                        "name": "datas",
                        "type": {
                            "vec": {
                                "defined": {
                                    "name": "aiOriginalData"
                                }
                            }
                        }
                    }
                ]
            }
        },
        {
            "name": "aiOriginalDataStatus",
            "type": {
                "kind": "enum",
                "variants": [
                    {
                        "name": "initialized"
                    },
                    {
                        "name": "feed"
                    },
                    {
                        "name": "sucking"
                    },
                    {
                        "name": "transfusion"
                    },
                    {
                        "name": "done"
                    }
                ]
            }
        },
        {
            "name": "bondingCurve",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "launchTokenSurplus",
                        "type": "u64"
                    },
                    {
                        "name": "virtualSol",
                        "type": "u64"
                    },
                    {
                        "name": "virtualSolReserves",
                        "type": "u64"
                    },
                    {
                        "name": "virtualTokenReserves",
                        "type": "u64"
                    }
                ]
            }
        },
        {
            "name": "createMintEvent",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "mint",
                        "type": "pubkey"
                    },
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "symbol",
                        "type": "string"
                    },
                    {
                        "name": "uri",
                        "type": "string"
                    },
                    {
                        "name": "poolSolAddress",
                        "type": "pubkey"
                    },
                    {
                        "name": "poolTokenAddress",
                        "type": "pubkey"
                    },
                    {
                        "name": "user",
                        "type": "pubkey"
                    },
                    {
                        "name": "timestamp",
                        "type": "i64"
                    },
                    {
                        "name": "launchTokenSurplus",
                        "type": "u64"
                    },
                    {
                        "name": "virtualSolReserves",
                        "type": "u64"
                    },
                    {
                        "name": "virtualTokenReserves",
                        "type": "u64"
                    }
                ]
            }
        },
        {
            "name": "pumpupConfiguration",
            "serialization": "bytemuckunsafe",
            "repr": {
                "kind": "rust",
                "packed": true
            },
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "bump",
                        "type": "u8"
                    },
                    {
                        "name": "feeRate",
                        "type": "u64"
                    },
                    {
                        "name": "aiGasFee",
                        "type": "u64"
                    },
                    {
                        "name": "authorityAddress",
                        "type": "pubkey"
                    },
                    {
                        "name": "feeAddress",
                        "type": "pubkey"
                    },
                    {
                        "name": "suckingAddress",
                        "type": "pubkey"
                    },
                    {
                        "name": "migrationAddress",
                        "type": "pubkey"
                    }
                ]
            }
        },
        {
            "name": "suckingEvent",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "mint",
                        "type": "pubkey"
                    },
                    {
                        "name": "suckingAmount",
                        "type": "u64"
                    },
                    {
                        "name": "user",
                        "type": "pubkey"
                    },
                    {
                        "name": "timestamp",
                        "type": "i64"
                    },
                    {
                        "name": "launchTokenSurplus",
                        "type": "u64"
                    },
                    {
                        "name": "virtualSol",
                        "type": "u64"
                    },
                    {
                        "name": "virtualSolReserves",
                        "type": "u64"
                    },
                    {
                        "name": "virtualTokenReserves",
                        "type": "u64"
                    }
                ]
            }
        },
        {
            "name": "tradeEvent",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "mint",
                        "type": "pubkey"
                    },
                    {
                        "name": "solAmount",
                        "type": "u64"
                    },
                    {
                        "name": "tokenAmount",
                        "type": "u64"
                    },
                    {
                        "name": "eventType",
                        "type": {
                            "defined": {
                                "name": "tradeEventType"
                            }
                        }
                    },
                    {
                        "name": "user",
                        "type": "pubkey"
                    },
                    {
                        "name": "timestamp",
                        "type": "i64"
                    },
                    {
                        "name": "pumpupFee",
                        "type": "u64"
                    },
                    {
                        "name": "virtualSolReserves",
                        "type": "u64"
                    },
                    {
                        "name": "virtualTokenReserves",
                        "type": "u64"
                    }
                ]
            }
        },
        {
            "name": "tradeEventType",
            "type": {
                "kind": "enum",
                "variants": [
                    {
                        "name": "buy"
                    },
                    {
                        "name": "sell"
                    },
                    {
                        "name": "withdraw"
                    },
                    {
                        "name": "transfusion"
                    }
                ]
            }
        }
    ]
};
