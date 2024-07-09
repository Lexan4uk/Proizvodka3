import { api } from "@api/api";

export const apiTags = {
    paginator_filter: "paginator_filter/deal_item/category",
};

export async function filteredItems(tag, catId, data) {
    let queryParts = [];

    for (const key in data) {
        if (data[key] && typeof data[key] === 'object' && Object.keys(data[key]).length > 0) {
            const subObject = data[key];
            for (const subKey in subObject) {
                if (subObject[subKey]) {
                    if (typeof subObject[subKey] === 'object') {
                        const priceObject = subObject[subKey]
                        for (const priceKey in priceObject)
                            if (priceKey === "left")
                                queryParts.push(`${key}.${subKey}[gte]=${priceObject[priceKey]}`);
                            else if (priceKey === "right")
                                queryParts.push(`${key}.${subKey}[lte]=${priceObject[priceKey]}`);
                    }
                    else
                        queryParts.push(`${key}.${subKey}[eq]=${subObject[subKey]}`);
                }
            }
        } else if (data[key]) {
            queryParts.push(`${key}[eq]=${data[key]}`);
        }
    }
    const queryString = queryParts.join('&');
    let querry = `${tag}/${catId}?perPage=36&${queryString}` 
    const response = await api.get(querry);
    return response;
}