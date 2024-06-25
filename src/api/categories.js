import { api } from "./api";

export const apiTags = {
  advert_categories: "advert-categories",
};

export async function getCategories() {
  const response = await api.get("advert-categories");
  return response.data;
}
