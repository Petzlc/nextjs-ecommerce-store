import Image from 'next/image';
import React from 'react';
import styles from './about.module.scss';

export const metadata = {
  title: 'About',
  description: 'This is the about page',
};

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About</h1>
      <div className={styles.section}>
        <div className={styles.imageContainerLeft}>
          <Image
            src="/img/about.webp"
            alt="Wine fill up"
            width="700"
            height="600"
            style={{
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              objectFit: 'cover',
            }}
          />
        </div>
        <div className={styles.textContainer}>
          <p>
            <h3>About Us</h3>
            <p>
              Welcome to our Wine Store, where passion meets quality. We are a
              dedicated team of wine enthusiasts committed to curating the
              finest selection of wines for you. Our journey began with a love
              for the craft and a deep appreciation for the nuances of
              winemaking. Each bottle on our platform is handpicked to ensure it
              meets our rigorous standards of excellence. We believe that wine
              is more than just a beverage; it's an experience that brings
              people together and tells a story of its origin. Our selection
              process is meticulous, involving visits to vineyards, meetings
              with winemakers, and countless tastings. We prioritize wines that
              are not only delicious but also reflect the artistry and
              dedication of their makers. Our website was founded with the
              mission to make exceptional wines accessible to everyone, from the
              casual sipper to the discerning connoisseur. We wanted to create a
              space where you can explore, learn, and indulge in the world of
              wine. Thank you for joining us on this journey.
            </p>
          </p>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.textContainer}>
          <h3>The Rise of Natural Wine</h3>
          <p>
            Natural wine, a timeless tradition with a modern twist, is rapidly
            gaining popularity among wine lovers around the world. Unlike
            conventional wines, natural wines are crafted using organic and
            biodynamic farming methods, free from synthetic chemicals and
            additives. This approach not only preserves the purity of the grapes
            but also supports sustainable agriculture. The history of natural
            wine dates back centuries, long before the industrialization of
            winemaking. These wines are a testament to the art of minimal
            intervention, where winemakers allow nature to take its course. The
            result is a wine that is a true reflection of its terroir, with
            unique flavors and characteristics that vary from one bottle to the
            next. Today, natural wine is celebrated for its authenticity and
            health benefits. With no added sulfites or chemicals, it offers a
            pure and unadulterated taste experience. As more people seek out
            organic and environmentally friendly products, natural wine
            continues to rise in popularity, offering a delicious and
            conscientious choice for wine enthusiasts everywhere.
          </p>
        </div>
      </div>
    </div>
  );
}
