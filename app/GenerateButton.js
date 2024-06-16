'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './GenerateButton.module.scss';

export default function GenerateButton() {
  const [color, setColor] = useState('');
  const router = useRouter();

  // document.cookie (don't use it, it's an antipatern. Just to showcase)
  useEffect(() => {
    // DON'T USE document.cookie
    // DON'T USE document.cookie (because of cross-side-script Attack. We use an API instead)

    const buttonColor = document.cookie
      .split('; ')
      .find((row) => row.startsWith('buttonColor='))
      ?.split('=')[1];

    setColor(
      buttonColor || `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    );
  }, []);
  return (
    <button
      className={styles.generateButton}
      style={{ backgroundColor: color }}
      onClick={() => {
        const newColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`; // For the cookie

        document.cookie = `buttonColor=${newColor}`;

        setColor(newColor);
        // setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
        router.refresh();
      }}
    >
      generate
    </button>
  );
}
