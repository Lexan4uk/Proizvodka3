import { api } from "@api/api";


export async function simpleGet(params) {
  const slice = params.slice(5)
  const response = await api.get(slice);
  return response.data;
}
export default simpleGet
