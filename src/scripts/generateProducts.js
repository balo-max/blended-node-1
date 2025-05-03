import { createFakeProduct } from "../utils/CreateFakeProduct.js";
import { readProducts } from "../utils/readProducts.js";
import { writeProducts } from "../utils/writeProducts.js";


export const generateProducts = async (number) => {
    try {
        const products = await readProducts();

        const generateProducts = Array.from({ length: number }).map(() => createFakeProduct());

        if ( products === undefined) {
            return await writeProducts(generateProducts);
        }

        const newProducts = products.concat(generateProducts);

        return await writeProducts(newProducts);
    } catch (err) {
        console.log(err);
    }
};

generateProducts(5);