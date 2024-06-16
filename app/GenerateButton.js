'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './GenerateButton.module.scss';

export default function GenerateButton() {
  const [color, setColor] = useState('#123fee');
  const router = useRouter();

  // document.cookie (don't use it, it's an antipatern. Just to showcase)
  const allCookies = document.cookie;

  const cookieValue = document.cookie
    .split('; ')
    .find((row) => row.startsWith('test2='))
    ?.split('=')[1];

  console.log(cookieValue);

  return (
    <button
      className={styles.generateButton}
      style={{ backgroundColor: color }}
      onClick={() => {
        setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
        router.refresh();
      }}
    >
      generate
    </button>
  );
}
