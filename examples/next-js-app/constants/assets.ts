/** Represents an asset */
export interface AssetInfo {
  /** Address of the asset in corresponding blockchain */
  address: string;
  /** Asset symbol */
  symbol: string;
  /** Human-readable name */
  name: string;
  /** URL to asset image */
  imageUrl: string;
  /** Number of decimal places */
  decimals: number;
}

// Demo app only. In real code, you should fetch this data from a decentralised exchange or a token price tracking service.
export const STATIC_ASSETS: AssetInfo[] = [
  {
    address: "EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9c",
    symbol: "TON",
    name: "TON",
    imageUrl:
      "https://asset.ston.fi/img/EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9c/ee9fb21d17bc8d75c2a5f7b5f5f62d2bacec6b128f58b63cb841e98f7b74c4fc",
    decimals: 9,
  },
  {
    address: "EQA2kCVNwVsil2EM2mB0SkXytxCqQjS4mttjDpnXmwG9T6bO",
    symbol: "STON",
    name: "STON",
    imageUrl:
      "https://asset.ston.fi/img/EQA2kCVNwVsil2EM2mB0SkXytxCqQjS4mttjDpnXmwG9T6bO/114bca17656d32bab17da0ced9bc044a50c849c949907c60af990c6818045c6d",
    decimals: 9,
  },
  {
    address: "EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs",
    symbol: "USD₮",
    name: "Tether USD",
    imageUrl:
      "https://asset.ston.fi/img/EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs/3c568dd0c7f9b8874fe1aba3d318d38437615f06b01a46618bfe3c0eee5fe37f",
    decimals: 6,
  },
  {
    address: "EQB420yQsZobGcy0VYDfSKHpG2QQlw-j1f_tPu1J488I__PX",
    symbol: "PX",
    name: "PX",
    imageUrl:
      "https://asset.ston.fi/img/EQB420yQsZobGcy0VYDfSKHpG2QQlw-j1f_tPu1J488I__PX/bbb51b3ab9e2d1d15f027164fb4b0f3d70cf3a45709e9ecdd4cad0e78af16aa3",
    decimals: 9,
  },
  {
    address: "EQBadq9p12uC1KfSiPCAaoEvhpXPHj7hBWq-mqGntuwE2C1C",
    symbol: "CATS",
    name: "TON Cats Jetton",
    imageUrl:
      "https://asset.ston.fi/img/EQBadq9p12uC1KfSiPCAaoEvhpXPHj7hBWq-mqGntuwE2C1C/13f9732939e0c002ad2091267be771bc9b5c201392d93ae2a3b34a7479559a90",
    decimals: 9,
  },
  {
    address: "EQAvlWFDxGF2lXm67y4yzC17wYKD9A0guwPkMs1gOsM__NOT",
    symbol: "NOT",
    name: "Notcoin",
    imageUrl:
      "https://asset.ston.fi/img/EQAvlWFDxGF2lXm67y4yzC17wYKD9A0guwPkMs1gOsM__NOT/2d92c8245aa44315ae8ccb47c7522ab96bc782fecd523a0df8742a1a0a4de7b4",
    decimals: 9,
  },
  {
    address: "EQB8O0JJ-hqeDAqDC1OG6zPYBfpV-QzwPed0kpcbILXsmAxG",
    symbol: "GEM",
    name: "Gem",
    imageUrl:
      "https://asset.ston.fi/img/EQB8O0JJ-hqeDAqDC1OG6zPYBfpV-QzwPed0kpcbILXsmAxG/056c4e6d08e9b413c2d9e34b210c6b9cb59da2cc9ae9e91bb906bec5926b9091",
    decimals: 9,
  },
  {
    address: "EQBsosmcZrD6FHijA7qWGLw5wo_aH8UN435hi935jJ_STORM",
    symbol: "STORM",
    name: "STORM",
    imageUrl:
      "https://asset.ston.fi/img/EQBsosmcZrD6FHijA7qWGLw5wo_aH8UN435hi935jJ_STORM/1b091aeb9bd5bff5656ad19aa7390c09519b11b3836fcaf0c06deaf1eb278801",
    decimals: 9,
  },
  {
    address: "EQBYnUrIlwBrWqp_rl-VxeSBvTR2VmTfC4ManQ657n_BUILD",
    symbol: "BUILD",
    name: "BUILD",
    imageUrl:
      "https://asset.ston.fi/img/EQBYnUrIlwBrWqp_rl-VxeSBvTR2VmTfC4ManQ657n_BUILD/33423c4eb6175745c7fe64b5c49ea6cb0def9eb3c0c6e5ed9578ca0191c4853a",
    decimals: 9,
  },
  {
    address: "EQBlqsm144Dq6SjbPI4jjZvA1hqTIP3CvHovbIfW_t-SCALE",
    symbol: "DUST",
    name: "DeDust",
    imageUrl: "https://assets.dedust.io/images/dust.gif",
    decimals: 9,
  },
  {
    address: "EQA1R_LuQCLHlMgOo1S4G7Y7W1cd0FrAkbA10Zq7rddKxi9k",
    symbol: "XAUt0",
    name: "XAUt0",
    imageUrl: "https://asset.ston.fi/img/EQA1R_LuQCLHlMgOo1S4G7Y7W1cd0FrAkbA10Zq7rddKxi9k/ca356b7643989652adabb4fbcda0edfc550172c97bd4bfa4f46ff461be68665e",
    decimals: 9,
  },
  {
    address: "EQAIb6KmdfdDR7CN1GBqVJuP25iCnLKCvBlJ07Evuu2dzP5f",
    symbol: "USDe",
    name: "Ethena USDe",
    imageUrl: "https://asset.ston.fi/img/EQAIb6KmdfdDR7CN1GBqVJuP25iCnLKCvBlJ07Evuu2dzP5f/1ed1d8672ec99912225b90ece40b5455177a84e48c300d6ab4680de7248827f3",
    decimals: 6,
  },
  {
    address: "EQCSxGZPHqa3TtnODgMan8CEM0jf6HpY-uon_NMeFgjKqkEY",
    symbol: "bmTON",
    name: "Bemo",
    imageUrl: "https://asset.ston.fi/img/EQCSxGZPHqa3TtnODgMan8CEM0jf6HpY-uon_NMeFgjKqkEY/f6fcd79c3b6dc6008b2c0aecbb5d45d9fa3dd93cdc566be9bdcf24b8ceb4154f",
    decimals: 9,
  },
  {
    address: "EQC98_qAmNEptUtPc7W6xdHh_ZHrBUFpw5Ft_IzNU20QAJav",
    symbol: "tsTON",
    name: "Tonstakers TON",
    imageUrl: "https://asset.ston.fi/img/EQC98_qAmNEptUtPc7W6xdHh_ZHrBUFpw5Ft_IzNU20QAJav/38f530facb209e4696b8aef17af51df94d16bd879926c517b07d25841da287b7",
    decimals: 9,
  },
  {
    address: "EQDPdq8xjAhytYqfGSX8KcFWIReCufsB9Wdg0pLlYSO_h76w",
    symbol: "hTON",
    name: "Hipo Staked TON",
    imageUrl: "https://asset.ston.fi/img/EQDPdq8xjAhytYqfGSX8KcFWIReCufsB9Wdg0pLlYSO_h76w/ea11f570bb3ece27a32ec01e17b8b17eced1a0c32e7ac71fed5e71a7f5f51d2f",
    decimals: 9,
  },
  {
    address: "EQCqC6EhRJ_tpWngKxL6dV0k6DSnRUrs9GSVkLbfdCqsj6TE",
    symbol: "STAKED",
    name: "Staked TON",
    imageUrl: "https://asset.ston.fi/img/EQCqC6EhRJ_tpWngKxL6dV0k6DSnRUrs9GSVkLbfdCqsj6TE/c2c4cc5d934aceec0611caed79b2e9ba32a08d3ee5eb24cf40baad41330806aa",
    decimals: 9,
  },
  {
    address: "EQBuIhXNNkWf9AW9miNGNTSO_uFZ23ejfIWrieXge5f733mw",
    symbol: "KTON",
    name: "KTON",
    imageUrl: "https://asset.ston.fi/img/EQBuIhXNNkWf9AW9miNGNTSO_uFZ23ejfIWrieXge5f733mw/3b760408146bb812882c137147040cf137f04dd2c8ccad374fc8cff84679ea7c",
    decimals: 9,
  },
  {
    address: "EQAfF5j3JMIpZlLmACv7Ub7RH7WmiVMuV4ivcgNYHvNnqHTz",
    symbol: "uTON",
    name: "uTON",
    imageUrl: "https://asset.ston.fi/img/EQAfF5j3JMIpZlLmACv7Ub7RH7WmiVMuV4ivcgNYHvNnqHTz/7fa9cbbba46b56f5aa93f81c8b4be5ce50b7e7c082ecca8fd15b513bf10fbe3d",
    decimals: 9,
  },
  {
    address: "EQCJ7ASxOkI6Ws5Bh8J74XZbRX8861jFgTZT42DXv71-UISf",
    symbol: "tgUSD",
    name: "Telegram USD",
    imageUrl: "https://asset.ston.fi/img/EQCJ7ASxOkI6Ws5Bh8J74XZbRX8861jFgTZT42DXv71-UISf/67d9bd0b000b2f3b8e7d1e76ad197d067a582001d997ddd2448d8dd1fbf33dd4",
    decimals: 6,
  },
  {
    address: "EQBZ_cafPyDr5KUTs0aNxh0ZTDhkpEZONmLJA2SNGlLm4Cko",
    symbol: "REDO",
    name: "Resistance Dog",
    imageUrl: "https://asset.ston.fi/img/EQBZ_cafPyDr5KUTs0aNxh0ZTDhkpEZONmLJA2SNGlLm4Cko/50bf856c1e644d81fe8111558617f076e2947562df289464c2666fd0f511eb7d",
    decimals: 9,
  },
  {
    address: "EQCvxJy4eG8hyHBFsZ7eePxrRsUQSFE_jpptRAYBmcG_DOGS",
    symbol: "DOGS",
    name: "Dogs",
    imageUrl: "https://asset.ston.fi/img/EQCvxJy4eG8hyHBFsZ7eePxrRsUQSFE_jpptRAYBmcG_DOGS/0141ee22473f725ea32265fd4b373976c39531fbd2894a86cd35ee02841afc5d",
    decimals: 9,
  },
  {
    address: "EQBa6ys-kqemGTEzgiS6YkReIlZFgMsu6axK3ks7GVzSq6Si",
    symbol: "KG",
    name: "Kilogram",
    imageUrl: "https://asset.ston.fi/img/EQBa6ys-kqemGTEzgiS6YkReIlZFgMsu6axK3ks7GVzSq6Si/7f3cb24f6776f146f94485c1c07757d8c24346dd9207a75f13c79f4c6a636752",
    decimals: 9,
  },
  {
    address: "EQCHGfuD-j40y6KxTmyCC4ultuz0K3PEvgRnr8UydGtg_E74",
    symbol: "Tonio",
    name: "Tonio",
    imageUrl: "https://cache.tonapi.io/imgproxy/ESFqfTve2LAalnAbyMPf7DyOH-6-EH__D6iS2xhsiqE/rs:fill:200:200:1/g:no/aHR0cHM6Ly9waG90b3MucGlua3NhbGUuZmluYW5jZS9maWxlL3BpbmtzYWxlLWxvZ28tdXBsb2FkLzE3NTA3NzgzOTYyMzItZjJkMDJhNjE3Y2IxZTA1OTE0YjU3Y2VlYjRkMmZhNjIucG5n.webp",
    decimals: 9,
  },
  {
    address: "EQDSYg2es_L0xpGfPJ6k39SxGA6MCHwV0EHY2smeF7aFAJW4",
    symbol: "SNOOP",
    name: "Snoop Ton",
    imageUrl: "https://asset.ston.fi/img/EQDSYg2es_L0xpGfPJ6k39SxGA6MCHwV0EHY2smeF7aFAJW4/e5b9546cf18ee263b36ff649017e42ec38db813244871283da966cdab0e42651",
    decimals: 9,
  }
];
