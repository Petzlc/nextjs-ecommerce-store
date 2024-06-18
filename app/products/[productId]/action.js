'use server';
import { cookies } from 'next/headers';

export async function createOrUpdateCookie(productId, quantity) {
  // Get the existing cart items from the cookies
  const existingCart = cookies().get('cartItems');
  const cartItems = existingCart ? JSON.parse(existingCart.value) : {};
  // const currentQuantity = cookies().get('QuantityButton') || 0;
  // const currentQuantityNumber = currentQuantity
  // ? JSON.parse(existingQuantity)
  // : 0;
  // const newQuantity = currentQuantityNumber + quantity;
  // let newQuantity = quantity;

  // if (currentQuantity) {
  //   newQuantity += parseInt(existingQuantity);
  // }

  // update the sum of the specific product
  if (cartItems[productId]) {
    cartItems[productId] += quantity;
  } else {
    cartItems[productId] = quantity;
  }

  //Save the current cart items in the cookies
  await cookies().set('cartItems', JSON.stringify(cartItems));
}
