import { sql } from './connect';

const products = [
  {
    id: 1,
    name: 'Belle Naturelle',
    variety: 'Gruener Veltliner',
    type: 'White', // red, white, rose
    producer: 'Jurtschitsch',
    region: 'Langenlois',
    year: '2022', // no new Date('2022') anymore because a year is not a date for whatever reason. so instead it's going to be a string from now on
    price: 19,
  },
  {
    id: 2,
    name: 'Ein Wildes Glaeschen Rose',
    variety: 'Cuvee Rose',
    type: 'Rose',
    producer: 'Zahel',
    region: 'Vienna',
    year: '2022',
    price: 17,
  },
  {
    id: 3,
    name: 'gluegglich',
    variety: 'Cuvee White',
    type: 'White',
    producer: 'Loimer',
    region: 'Langenlois',
    year: '2020',
    price: 11,
  },
  {
    id: 4,
    name: 'Kieselstein',
    variety: 'Zweigelt',
    type: 'Red',
    producer: 'Claus Preisinger',
    region: 'Gols',
    year: '2022',
    price: 14,
  },
];
export const metadata = {
  title: 'Products',
  description: 'This is the products page',
};

export async function getProducts() {
  const products = await sql`
  SELECT
    *
  FROM
  products
`;
  return products;
}

export function getProduct(id) {
  return products.find((product) => product.id === id);
}

console.log(
  await sql`
  SELECT
    *
  FROM
  products
`,
);
