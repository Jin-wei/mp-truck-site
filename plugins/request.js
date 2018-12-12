import axios from 'axios'
import { baseUrl } from '~/config/env'

// axios
let axiosConfig = {
  baseURL: baseUrl,
  timeout: 20000 // request timeout
};

console.log(process.env.NODE_ENV);
console.log(baseUrl);

const request = axios.create(axiosConfig)
// Add a request interceptor
request.interceptors.request.use(function (config) {
  // Do something before request is sent
  // let token = common.getStoreData('token')
  // if (typeof (token) === 'string') {
  //   config.headers['authorization'] = token
  // }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
request.interceptors.response.use(function (response) {
  // Do something with response data
  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

export default request
