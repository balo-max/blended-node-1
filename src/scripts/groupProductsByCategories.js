import { readProducts } from "../utils/readProducts.js";


export const groupProductsByCategories = async () => {
    try {
        const products = await readProducts();
        const grouped = {};

        products.forEach(({ category, name }) => {
            if (!grouped[category]) {
                grouped[category] = [];
            }
            grouped[category].push(name);
        });

        return grouped;
    } catch (err) {
        console.log(err);
    }
};


console.log(await groupProductsByCategories());