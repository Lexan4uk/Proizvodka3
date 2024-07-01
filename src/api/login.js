import { api } from "@api/api";


export async function login() {
  const response = await api.get("auth_user");
  return response.data;
}