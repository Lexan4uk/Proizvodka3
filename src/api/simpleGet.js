import { api } from "@api/api";



export async function simpleGet(params) {
  if (params) {
    //const slice = params.slice(5)
    const response = await api.get(params);
    return response.data;
  }
  else
    return null
  
}
export default simpleGet
