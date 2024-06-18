'use server';

import { cookies } from 'next/headers';

export async function createOrUpdateCookie(addQuantity) {
  await cookies().set(
    'productQuantity',
    JSON.stringify([
      { id: 1, quantity: addQuantity },
      { id: 2, quantity: addQuantity },
      { id: 3, quantity: addQuantity },
      { id: 4, quantity: addQuantity },
    ]),
  );
}
