import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import styles from '../page.module.scss';

export const metadata = {
  title: 'Products',
  description: 'This is the products page',
};

export default function ProductsPage() {
  const products = getProducts();
  return (
    <div>
      This are the products
      {products.map((product) => {
        return (
          <div key={`products-${product.id}`}>
            <div>{product.name}</div>
            <Image
              src={`/img/${product.name}.png`}
              alt=""
              width="53"
              height="244"
            />
          </div>
        );
      })}
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
