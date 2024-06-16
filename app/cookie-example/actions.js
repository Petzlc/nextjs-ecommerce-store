'use server';

// so we run this function on serversied and pass the cookie value and use it and with the await and set we can set the cookie when it is a string
import { cookies } from 'next/headers';

export async function createCookie(value) {
  await cookies().set('testCookie', value);
}
