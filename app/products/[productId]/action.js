'use server';
import { cookies } from 'next/headers';

export async function createOrUpdateCookie(productId, quantity) {
  const cookieName = 'addQuantityCookie';
  const existingCartCookie = cookies().get(cookieName);
  let cartItems = existingCartCookie
    ? JSON.parse(existingCartCookie.value)
    : [];

  const existingProductIndex = cartItems.findIndex(
    (item) => item.id === productId,
  );
  if (existingProductIndex !== -1) {
    cartItems[existingProductIndex].quantity += quantity;
  } else {
    cartItems.push({ id: productId, quantity });
  }
  await cookies().set(cookieName, JSON.stringify(cartItems));
}
// quantityCookie
//   await cookies().set(
//     'addQuantityCookie',
//     JSON.stringify([
//       { id: 1, quantityCookie: quantity }, // quantityCookie: quantityCookie
//       { id: 2, quantityCookie: quantity },
//       { id: 3, quantityCookie: quantity },
//       { id: 4, quantityCookie: quantity },
//     ]),
//   );
// }

// 'use server';

// import { cookies } from 'next/headers';

// export async function createOrUpdateCookie(addQuantity) {
//   await cookies().set(
//     'addToCart', // addQuantity
//     JSON.stringify([
//       { id: 1, quantity: addQuantity },
//       { id: 2, quantity: addQuantity },
//       { id: 3, quantity: addQuantity },
//       { id: 4, quantity: addQuantity },
//     ]),
//   );
// }
