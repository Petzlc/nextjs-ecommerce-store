import { cookies } from 'next/headers'; // Test
import Image from 'next/image';
import Link from 'next/link';
import { getProductsInsecure } from '../../database/products'; // Test
import styles from './cartPage.module.scss';
import CheckoutButtonReal from './CheckoutButtonForm';

export const metadata = {
  title: 'Cart',
  description: 'This is the cart page',
};

export default async function CartPage() {
  // read out the Cookies
  const cartCookie = cookies().get('addQuantityCookie');
  const cartItems = cartCookie ? JSON.parse(cartCookie.value) : [];

  // getting product details
  const allProducts = await getProductsInsecure();

  // getting the products in the cart
  const productsInCart = cartItems.map((item) => {
    const product = allProducts.find((product) => product.id === item.id);
    return {
      ...product,
      quantity: item.quantity,
      totalPrice: product.price * item.quantity,
    };
  });

  // total costs
  const totalPrice = productsInCart.reduce(
    (total, item) => total + item.totalPrice,
    0,
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>CartPage</h1>
      <div className={styles.cartItems}>
        {productsInCart.length > 0 ? (
          productsInCart.map((product) => (
            <div
              key={product.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px',
              }}
            >
              <Image
                src={`/img/${product.name}.webp`}
                alt={`${product.name}`}
                width="53"
                height="244"
              />
              <div
                className={styles.productDetails}
                style={{ marginLeft: '20px' }}
              >
                <h2>{product.name}</h2>
                <p>Price: {product.price.toFixed(2)}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Subtotal: {product.totalPrice.toFixed(2)}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <div className={styles.totalPrice}>
        <h2>Total Price: {totalPrice.toFixed(2)}</h2>
      </div>
      <CheckoutButtonReal />
    </div>
  );
}
