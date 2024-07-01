import { create } from 'apisauce'


export const api = create({
  baseURL: 'http://altujaar-admin.kvokka.net/api/',
  headers: { Accept: "application/json" },
})
api.addRequestTransform(request => {
  const token = localStorage.getItem('token');
  
  if (token) {
    request.headers['Authorization'] = `Bearer ${token}`
  } 
})