import { cache } from 'react';
import { sql } from './connect';

// const products = [
//   {
//     id: 1,
//     name: 'Belle Naturelle',
//     variety: 'Gruener Veltliner',
//     type: 'White', // red, white, rose
//     producer: 'Jurtschitsch',
//     region: 'Langenlois',
//     year: '2022', // no new Date('2022') anymore because a year is not a date for whatever reason. so instead it's going to be a string from now on
//     price: 19,
//   },
//   {
//     id: 2,
//     name: 'Ein Wildes Glaeschen Rose',
//     variety: 'Cuvee Rose',
//     type: 'Rose',
//     producer: 'Zahel',
//     region: 'Vienna',
//     year: '2022',
//     price: 17,
//   },
//   {
//     id: 3,
//     name: 'gluegglich',
//     variety: 'Cuvee White',
//     type: 'White',
//     producer: 'Loimer',
//     region: 'Langenlois',
//     year: '2020',
//     price: 11,
//   },
//   {
//     id: 4,
//     name: 'Kieselstein',
//     variety: 'Zweigelt',
//     type: 'Red',
//     producer: 'Claus Preisinger',
//     region: 'Gols',
//     year: '2022',
//     price: 14,
//   },
// ];

// type Product = {
//   id: number;
//   name: string;
//   variety: string;
//   type: string;
//   producer: string;
//   region: string;
//   year: string;
//   price: number;
// };

export const metadata = {
  title: 'Products',
  description: 'This is the products page',
};

// Displaying the products
export const getProductsInsecure = cache(async () => {
  const products = await sql`       {/* <Product[]> */}
  SELECT
    *
  FROM
  products
`;
  return products;
});

// Displaying single products
export const getProductInsecure = cache(async (id /*: number*/) => {
  const [products] = await sql`         {/* <Product[]> */}
  SELECT
    *
  FROM
  products
  WHERE id = ${id}
`;
  return products;
});
// export function getProduct(id) {
//   return products.find((product) => product.id === id);
// }

// console.log(
//   await sql`
//   SELECT
//     *
//   FROM
//   products
// `,
// );
