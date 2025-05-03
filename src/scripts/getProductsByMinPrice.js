import { readProducts } from "../utils/readProducts.js";


export const getProductsByMinPrice = async (price) => {
    try {
        const products = await readProducts();

        const filterByPrice = products.filter((product) => product.price >= price);
        return filterByPrice;
    } catch (err) {
        console.log(err);
    }
};

console.log(await getProductsByMinPrice(800));