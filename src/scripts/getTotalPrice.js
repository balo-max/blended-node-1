import { readProducts } from "../utils/readProducts.js";

export const getTotalPrice = async () => {
    try {
        let totalPrice = 0;
        const products = await readProducts();

        products.map(product => totalPrice = totalPrice + Number(product.price));
        return Number(totalPrice.toFixed(2));
    } catch (err) {
        console.log(err);
    }
};


console.log(await getTotalPrice());