import Image from 'next/image';
import Link from 'next/link';
import { getProductsInsecure } from '../../database/products';
import styles from './productsPage.module.scss';

export const metadata = {
  title: 'Products',
  description: 'This is the products page',
};

export default async function ProductsPage() {
  const products = await getProductsInsecure();
  return (
    <div>
      <h1 className={styles.headerText}>These are the products</h1>
      <div className={styles.productsContainer}>
        {products.map((product) => {
          return (
            <div className={styles.productBox} key={`products-${product.id}`}>
              <Link href={`/products/${product.id}`}>
                <div className={styles.productName}>{product.name}</div>
                <div className={styles.imageContainer}>
                  <Image
                    src={`/img/${product.name}.webp`}
                    alt={`${product.name}`}
                    width="53"
                    height="244"
                  />
                </div>
              </Link>
              <Image
                className={styles.euImage}
                src="/img/Weinco_EU_Organic.webp"
                alt="Wein und Co EU Organic Logo"
                width="60"
                height="30"
              />
              <br />
              <Image
                className={styles.euImage}
                src="/img/Weinco_natural_wine.webp"
                alt="Wein und Co Natur Wein Logo"
                width="60"
                height="30"
              />
              <div className={styles.productDetails}>
                <p>
                  <span className={styles.label}>Price:</span>
                  <span className={styles.labelPrice}>{product.price}</span>
                </p>
              </div>

              <br></br>
              <div>
                <hr
                  style={{ width: '220px', color: '#E6E6E6', marginTop: '7px' }}
                />
                <p className={styles.textDetails}>
                  <Link href={`/products/${product.id}`}>
                    <span className={styles.hover}>Details &#x1F6C8;</span>
                  </Link>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
