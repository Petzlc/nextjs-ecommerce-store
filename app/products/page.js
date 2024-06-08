import styles from '../page.module.scss';

export const metadata = {
  title: 'Products',
  description: 'This is the products page',
};

export default function ProductsPage() {
  return (
    <div>
      <h1>ProductsPage</h1>
      <div className={styles.listProducts}>
        <div className={styles.products}>
          <p>Product 1</p>
        </div>
        <div className={styles.products}>
          <p>Product 2</p>
        </div>
        <div className={styles.products}>
          <p>Product 3</p>
        </div>
        <div className={styles.products}>
          <p>Product 4</p>
        </div>
      </div>
    </div>
  );
}
