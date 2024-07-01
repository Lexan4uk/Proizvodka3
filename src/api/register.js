import { api } from "@api/api";

export async function postRegistration(regData) {
  const response = await api.post("registration", regData);
  return response.data;
}