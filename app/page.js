import Image from 'next/image';
// import GenerateButton from './GenerateButton';
// import LocalStorage from './LocalStorage';
import React from 'react';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <GenerateButton /> */}
      {/* <LocalStorage /> */}
      <h1 className={styles.title}>Natural Wine Store</h1>
      <div className={styles.intro}>
        <p>
          welcome to our Natural Wine Store. Discover the finest natural wines
          crafted with care and passion.
        </p>
      </div>
      <div className={styles.section}>
        <div className={styles.imageContainerLeft}>
          <Image
            src="/img/Winefillup.webp"
            alt="Wine fill up"
            width="700"
            height="350"
            style={{
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              objectFit: 'cover',
            }}
          />
        </div>
        <div className={styles.textContainer}>
          <p>
            Natural wine is crafted with minimal intervention, using organic and
            biodynamic farming methods.
          </p>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.textContainer}>
          <p>
            Austria is renowned for its diverse wine regions, offering a variety
            of unique natural wines.
          </p>
        </div>
        <div className={styles.imageContainerRight}>
          <Image
            src="/img/Vinyards.webp"
            alt="Vinyards"
            width="700"
            height="350"
            style={{
              borderRadius: '5px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
    </div>
  );
}
