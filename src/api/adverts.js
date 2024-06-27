import { api } from "@api/api";

export const apiTags = {
  adverts_with_pages: "paginator_deal_items",
};

export async function getAdverts() {
  const response = await api.get("paginator_deal_items");
  return response.data;
}