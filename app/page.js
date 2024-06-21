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
          Welcome to the Natural Wine Store! We offer a unique selection of
          natural wines made with love and care. Whether you're a connoisseur or
          new to natural wines, our handpicked offerings promise to delight your
          palate and enrich your wine experience. Explore our curated collection
          and indulge in the essence of natural wines, with worldwide delivery
          available to bring these exceptional tastes to your doorstep.
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
            Natural wine production focuses on minimal intervention, allowing
            the true character of grapes and terroir to shine through. This
            approach emphasizes organic and biodynamic farming practices,
            eschewing additives and manipulation during fermentation. By
            harnessing indigenous yeasts and natural processes, natural
            winemakers preserve biodiversity and honor the unique environmental
            factors that shape each vineyard's grapes. <br /> <br /> This method
            results in wines that showcase purity, complexity, and a distinct
            sense of place, embodying the essence of sustainable viticulture.
            Natural wines often exhibit vibrant flavors and textures that
            reflect the specific conditions of their origin. The movement
            champions transparency and authenticity, appealing to connoisseurs
            seeking wines that are not only delicious but also reflective of
            their origin and crafted with deep respect for nature.
          </p>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.textContainer}>
          <p>
            Austria is renowned for its diverse wine regions, offering a variety
            of unique natural wines. The country's viticultural landscape spans
            picturesque valleys and steep hillsides, each contributing distinct
            flavors and characteristics to its wines. <br /> Among Austria's
            notable wine regions is Burgenland, known for its rich reds and
            sweet dessert wines produced around Lake Neusiedl. Styria, in the
            south, boasts vibrant white wines, particularly from the Sauvignon
            Blanc and Welschriesling grape varieties. The Wachau region along
            the Danube River is celebrated for its elegant Grüner Veltliner and
            Riesling wines, which reflect the region's unique microclimate and
            terraced vineyards. <br /> Austrian winemakers are committed to
            sustainable practices, often employing organic and biodynamic
            methods to nurture their vineyards. This dedication to quality and
            environmental stewardship is evident in the purity and complexity of
            Austrian natural wines.
          </p>
        </div>
        <div className={styles.imageContainerRight}>
          <Image
            src="/img/Vineyards.webp"
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
