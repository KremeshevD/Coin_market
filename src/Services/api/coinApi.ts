import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {  Response, CoinsList, Coin, Price, HistoryRequest } from './types'


export const coinApi = createApi({
  reducerPath: 'coinApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: process.env.REACT_APP_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', process.env.REACT_APP_API_KEY as string)
      headers.set('Host', 'coinranking1.p.rapidapi.com')
      headers.set('content-Type', 'application/json')
      headers.set('method', 'GET')
      return headers
    },
   }),
  endpoints: (builder) => ({
    getCoinsList: builder.query<Response<CoinsList>, void>({
      query: () => `coins`,
    }),
    getCoin: builder.query<Response<Coin>, string>({
      query: (uuid) => `coin/${uuid}`,
    }),
    getCoinPrice: builder.query<Response<Price>, string>({
      query: (uuid) => `coin/${uuid}/price`
    }),
    getPriceHistory: builder.query<Response<any>, HistoryRequest>({
      query: ({uuid, options}) => ({
        url: `coin/${uuid}/history`,
        params: {
          ...options
        }
      }),
      
    })

  }),
  
})

export const { useGetCoinsListQuery, useGetCoinQuery } = coinApi

