import { cookies } from 'next/headers';

export default async function setTotalPriceCookie(totalPrice) {
  const cookieStore = cookies();
  cookieStore.set('totalPriceCookie', JSON.stringify(totalPrice), {
    path: '/',
  });
}
