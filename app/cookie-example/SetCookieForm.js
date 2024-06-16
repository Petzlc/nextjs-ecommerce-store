'use client';
// set the cookie with a client component with a useState an input field and a button
import { useState } from 'react';
import { createCookie } from './actions';

export default function SetCookieForm() {
  const [cookieValue, setCookieValue] = useState('');
  return (
    <>
      <form>
        {/* the input field is a controlled component so we connect it to our value and onChnage we set the cookie value to the event.currentTarget.value */}
        <input
          value={cookieValue}
          onChange={(event) => setCookieValue(event.currentTarget.value)}
        />
        {/* the button calls the creatCookie function and that is the cookie. i call it with a form action, we use this to tell next.js to run it in the background on serverside */}
        <button formAction={async () => await createCookie(cookieValue)}>
          Set Cookie
        </button>
      </form>
    </>
  );
}
