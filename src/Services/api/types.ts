export interface Coin {
  uuid: string;
  iconUrl: string;
  name: string;
  symbol: string;
  price: string;
  description?: string;
  color?: string;
  websiteUrl?: string;
  links?: Link[];
  supply?: Supply;
  numberOfMarkets?: number;
  numberOfExchanges?: number;
  '24hVolume'?: string;
  marketCap?: string;
  fullyDilutedMarketCap?: string;
  btcPrice?: string;
  priceAt?: number;
  change?: string;
  rank?: number;
  sparkline?: string[];
  allTimeHigh?: AllTimeHigh;
  coinrankingUrl?: string;
  tier?: number;
  lowVolume?: boolean;
  listedAt?: number;
}
export interface Link {
  name: string;
  type: string;
  url: string;
}
export interface AllTimeHigh {
  price: string;
  timestamp: number;
}
export interface Supply {
  confirmed: boolean;
  supplyAt: number;
  max: string;
  total: string;
  circulating: string;
}

export interface Exchange {
  uuid: string;
  iconUrl: string;
  name: string;
  recommended: boolean;
}

export interface Market {
  uuid: string;
  baseSymbol: string;
  quoteSymbol: string;
  baseUuid: string;
  quoteUuid: string;
  exchangeIconUrl: string;
  exchangeName: string;
  exchangeUuid: string;
  recommended: boolean;
}

export interface CoinsList {
  coins: Coin[];
  exchanges: Exchange[];
  markets: Market[];
}

export interface Response<T> {
  status: string;
  data: T;
}
export interface Price {
  price: string,
  timestamp: number
}

export interface HistoryRequestOption {
  referenceCurrencyUuid: string,
  timePeriod: string
}
export interface HistoryRequest {
  uuid: string,
  options: HistoryRequestOption
}

