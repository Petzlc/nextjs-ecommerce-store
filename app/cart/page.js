// import Checkout from '../checkout.js';
// import CheckoutButton from '../CheckoutButton.js';
import { cookies } from 'next/headers'; // Test
import Image from 'next/image';
import Link from 'next/link';
import { getProductsInsecure } from '../../database/products'; // Test
import CheckoutButtonReal from './CheckoutButtonForm';

export const metadata = {
  title: 'Cart',
  description: 'This is the cart page',
};

export default async function CartPage() {
  // read out the Cookies         // test
  const cartCookie = cookies().get('addQuantityCookie');
  const cartItems = cartCookie ? JSON.parse(cartCookie.value) : [];

  // getting product details    // test
  const allProducts = await getProductsInsecure();

  // getting the products in the cart   // test
  const productsInCart = cartItems.map((item) => {
    const product = allProducts.find((product) => product.id === item.id);
    return {
      ...product,
      quantity: item.quantity,
      totalPrice: product.price * item.quantity,
    };
  });

  // total costs      // test
  const totalPrice = productsInCart.reduce(
    (total, item) => total + item.totalPrice,
    0,
  );

  return (
    <div>
      <h1>CartPage</h1>
      <div>
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
                width="50"
                height="50"
              />
              <div style={{ marginLeft: '20px' }}>
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
      <div>
        <h2>Total Price: {totalPrice.toFixed(2)}</h2>
      </div>
      <Link href="/CheckoutForm">
        <button>Go to Checkout</button>
      </Link>
      <CheckoutButtonReal />
      {/* <Checkout /> */}
      {/* <CheckoutButton /> */}
    </div>
  );
}
