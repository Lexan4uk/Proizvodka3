import axios from 'axios'
import { create } from 'apisauce'

// define the api
const customAxiosInstance = axios.create({
  baseURL: 'http://altujaar-admin.kvokka.net/api/',
  headers: { Accept: "application/json" },
})

export const api = create({ axiosInstance: customAxiosInstance })