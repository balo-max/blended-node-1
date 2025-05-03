import { PATH_DB } from '../contacts/products.js';
import * as fs from 'node:fs/promises';

export const writeProducts = async (updatedProducts) => {
    try {
        await fs.writeFile(PATH_DB, JSON.stringify(updatedProducts, undefined, 2), 'utf8');
    } catch (err) {
        console.log(err);
    }
};