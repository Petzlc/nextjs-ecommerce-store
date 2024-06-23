import { cookies } from 'next/headers';

export function getCookie(name: string) {
  const cookie = cookies().get(name);
  if (!cookie) {
    return undefined;
  }
  return cookie.value;
}

export function setTotalPriceCookie(totalPrice: number) {
  const cookieStore = cookies();
  cookieStore.set('totalPriceCookie', JSON.stringify(totalPrice), {
    path: '/',
  });
}
