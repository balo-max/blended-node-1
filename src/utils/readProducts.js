import { PATH_DB } from '../contacts/products.js';
import * as fs from 'node:fs/promises';
import { writeProducts } from './writeProducts.js';

export const readProducts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });

        return data === '' ? undefined : JSON.parse(data); 
    } catch (err) {
        console.log(err);
    }
};