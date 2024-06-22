import { Sql } from 'postgres';

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

export async function up(sql: Sql) {
  for (const product of products) {
    await sql`
  INSERT INTO
    products (name, variety, type, producer, region, year, price)
  VALUES (
    ${product.name},
    ${product.variety},
    ${product.type},
    ${product.producer},
    ${product.region},
    ${product.year},
    ${product.price}
  )
  `;
  }
}

export async function down(sql: Sql) {
  for (const product of products) {
    await sql`
    DELETE FROM products WHERE id = ${product.id}
    `;
  }
}
