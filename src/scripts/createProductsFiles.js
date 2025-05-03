import { writeFile } from 'fs/promises';
import { readProducts } from '../utils/readProducts.js';
import { PATH_FILES_DIR } from '../contacts/products.js';

export const createProductsFiles = async () => {
    try {
    const products = await readProducts();

    products.forEach(product => {
        const content = JSON.stringify(product);
        const nameFile = product.name.trim().replace(/\s+/g, '-');

        writeFile(`${PATH_FILES_DIR}/${nameFile}.json`, content);
    });
    } catch (err) {
        console.log(err);
    }
};


await createProductsFiles();