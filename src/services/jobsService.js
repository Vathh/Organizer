/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://localhost:7051',
  headers: {
    "Content-Type": "application/json"
  }
});

export default {  
  getAll: (pageSize, pageNumber, sortBy, sortDirection) =>
    instance({
      method: 'GET',
      url: '/api/ogarnizer/job',
      params : {
        "pageSize" : pageSize,
        "pageNumber" : pageNumber,
        "sortBy": sortBy,
        "sortDirection": sortDirection 
      }
    }),
  stockTimeSeries: (symbol) =>
    instance({
        'method':'GET',
        'url':'/query',
        'params': {
            'outputsize':'compact',
            'datatype':'json',
            'function':'TIME_SERIES_DAILY_ADJUSTED',
            'symbol': symbol.toUpperCase()
        },
    })
}

