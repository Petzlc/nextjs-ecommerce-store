import { cookies } from 'next/headers';
import SetCookieForm from './SetCookieForm';

export default function SetCookiePage() {
  // Get the cookies with a value of a string
  const testCookieValue = cookies().get('testCookie');
  console.log(testCookieValue);
  // 'testComment' is a string already. (so if i put {testCookieValue.value} i get the 'testCookie' text in my website)
  // { name: 'testCookie', value: 'testComment' }
  // { name: 'testCookie', value: '[{"name":"Lukas"}]' }

  // const json = JSON.stringify([{ name: 'Lukas' }]);
  // console.log(json);
  // const test = JSON.parse(testCookieValue.value);
  return (
    <>
      {/* display cookie with testCookie.value */}
      <div>Cookie Value: {testCookieValue.value}</div>
      <SetCookieForm />
    </>
  );
}
