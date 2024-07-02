import { api } from "@api/api";

export async function postRemind(email) {
  const response = await api.post("remind_password", email);
  return response.data;
}