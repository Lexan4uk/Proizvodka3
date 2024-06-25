import { create } from 'apisauce'


export const api = create({
  baseURL: 'http://altujaar-admin.kvokka.net/api/',
  headers: { Accept: "application/json" },
})