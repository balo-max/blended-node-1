import { readProducts } from "../utils/readProducts.js";
import { writeProducts } from "../utils/writeProducts.js";

export const modifyProducts = async () => {
    try {
        const products = await readProducts();

        const filtredProducts = products.map(({ description, ...rest }) => rest);

        return await writeProducts(filtredProducts);
    } catch (err) {
        console.log(err);
    }
};

await modifyProducts();