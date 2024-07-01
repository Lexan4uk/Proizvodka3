import { api } from "@api/api";


export async function getToken(logData) {
  const response = await api.post("authentication_token", logData);
  return response.data;
}