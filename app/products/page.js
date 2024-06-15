import Image from 'next/image';
import Link from 'next/link';
// import Link from 'next/link';
import { getProductsInsecure } from '../../database/products';
import styles from './productsPage.module.scss';

// import styles from '../page.module.scss';

export const metadata = {
  title: 'Products',
  description: 'This is the products page',
};

export default async function ProductsPage() {
  const products = await getProductsInsecure();
  return (
    <div>
      <h5>This are the products</h5>
      <div className={styles.productsContainer}>
        {products.map((product) => {
          return (
            <div className={styles.productBox} key={`products-${product.id}`}>
              <Link href={`/products/${product.id}`}>
                <div className={styles.productName}>{product.name}</div>
                <Image
                  src={`/img/${product.name}.webp`}
                  alt={`${product.name}`}
                  width="53"
                  height="244"
                />
              </Link>
              <div className={styles.productDetails}>
                <p>
                  <strong>Variety:</strong> {product.variety}
                </p>
                <hr />
                <p>
                  <strong>Type:</strong> {product.type}
                </p>
                <hr />
                <p>
                  <strong>Producer:</strong> {product.producer}
                </p>
                <hr />
                <p>
                  <strong>Region:</strong> {product.region}
                </p>
                <hr />
                <p>
                  <strong>Year:</strong> {product.year} {/* .getFullYear() */}
                </p>
                <hr />
                <p>
                  <strong>Price:</strong> {product.price}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    // <div>
    //   <h1>ProductsPage</h1>
    //   <div className={styles.listProducts}>
    //     <div className={styles.products}>
    //       <p>Product 1</p>
    //     </div>
    //     <div className={styles.products}>
    //       <p>Product 2</p>
    //     </div>
    //     <div className={styles.products}>
    //       <p>Product 3</p>
    //     </div>
    //     <div className={styles.products}>
    //       <p>Product 4</p>
    //     </div>
    //   </div>
    // </div>
  );
}
