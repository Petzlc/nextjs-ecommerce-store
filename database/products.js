import 'server-only';

const products = [
  {
    id: 1,
    name: 'Belle Naturelle',
    variety: 'Grüner Veltliner',
    type: 'White', // red, white, rose
    producer: 'Jurtschitsch',
    region: 'Langenlois',
    year: new Date('2022'),
  },
  {
    id: 2,
    name: 'Ein Wildes Gläschen Rosé',
    variety: 'Cuvée Rosé',
    type: 'Rosé', // red, white, rose
    producer: 'Zahel',
    region: 'Vienna',
    year: new Date('2022'),
  },
  {
    id: 3,
    name: 'gluegglich',
    variety: 'Cuvée White',
    type: 'White', // red, white, rose
    producer: 'Loimer',
    region: 'Langenlois',
    year: new Date('2020'),
  },
  {
    id: 4,
    name: 'Kieselstein',
    variety: 'Zweigelt',
    type: 'Red', // red, white, rose
    producer: 'Claus Preisinger',
    region: 'Gols',
    year: new Date('2022'),
  },
];
export const metadata = {
  title: 'Products',
  description: 'This is the products page',
};

export function getProducts() {
  return products;
}
