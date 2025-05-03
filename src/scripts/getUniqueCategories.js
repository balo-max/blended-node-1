import { readProducts } from "../utils/readProducts.js";

export const getUniqueCategories = async () => {
    try {
        const filtredProducts = [];
        const products = await readProducts();
        
        products.forEach(product => {
            const category = product.category;
            if (!filtredProducts.includes(category)) {
                filtredProducts.push(category);
            }
        });

        return filtredProducts;
    } catch (err) {
        console.log(err);
    }
};

console.log(await getUniqueCategories());