import { api } from "@api/api";

export const apiTags = {
    deal_item: "filter_deal_item_list",
};
export const getTag = (id) => {
    const deal_item = ["1", "4", "6", "7", "10"]
    if (deal_item.includes(id))
        return apiTags.deal_item
}

export async function getFilters(apiTag, id) {
    const response = await api.get(`${apiTag}/${id}`);
    return response.data;
}