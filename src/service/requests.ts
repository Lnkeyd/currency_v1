import axios from "axios";

//API docs:
//https://github.com/fawazahmed0/currency-api#readme

const BASEURL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies'

//----------------------------------------------------------

// const BASEURL = 'https://api.freecurrencyapi.com/v1/'
// const BASE_CURRENCY = 'RUB'


// const API_KEY = 'UwNZa94VSo93k4LrJyW7JAJo33zipMTnosE49XDF'

// export const getCurrencyList = () => {
//     return axios.get(BASEURL + 'currencies', {params: {apikey: API_KEY}}).then(res => res.data.data).catch(err => console.log(err))
// }

// export const getExchangeList = (currency: string) => {
//     return axios.get(BASEURL + 'latest', {params: {apikey: API_KEY, base_currency: BASE_CURRENCY}}).then(res => res.data.data).catch(err => console.log(err))
// }

//---------------------------------------------------------

export const getExchangeList = (currency: string) => {
    return axios.get(BASEURL + `/${currency}.json`).then(res => res.data).catch(err => console.log(err))
}

export const getCurrencyList = () => {
    return axios.get(BASEURL + '.json').then(res => res.data).catch(err => console.log(err))
}

export const getExchange = (from: string, to: string) => {
    return axios.get(BASEURL + `/${from}/${to}.json`).then(res => res.data).catch(err => console.log(err))
}