import { cookies } from 'next/headers.js';
import Link from 'next/link';
import { getProductsInsecure } from '../../database/products';
import CheckoutForm from './CheckoutForm.js';
import styles from './page.modules.scss';

export const metadata = {
  title: 'Checkout',
  description: 'This is the checkout page',
};

export default async function CheckoutPage() {
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
    <div>
      <div>
        <h2 style={{ textAlign: 'center' }}>
          Total Price: {totalPrice.toFixed(2)}
        </h2>
        <div className={styles.buttonContainer}>
          <Link href="/products">
            <button className={styles.shoppingButton}>Keep shopping</button>
          </Link>
        </div>
        <CheckoutForm />
      </div>
      <br />
      <br />
    </div>
  );
}
