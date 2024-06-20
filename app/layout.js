import './globals.scss'; // was only import './globals.scss'. <h3> in header was directly under the header and no extra <div>
import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Home | E-Commerce', // Replace 'E-Commerce' with the proper name of your wine-shop. This word is the main keyword for the website
    template: '%s | E-Commerce', // Replace 'E-Commerce' with the proper name of your wine-shop
  },
  description: 'Generated by create next app',
};

// was not an async function before       // test
export default async function RootLayout({ children }) {
  // read out the 'addQuantityCookie' Cookie        // test
  const cartCookie = cookies().get('addQuantityCookie');
  const cartItems = cartCookie ? JSON.parse(cartCookie.value) : [];

  // calculate the total number of products in the cart
  const totalItemsInCart = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <h3>
            <Link href="/">
              <picture>
                <img
                  src="/img/wine-bottle.webp"
                  alt="wine bottles"
                  width="75"
                />
              </picture>
              Natural Wine Store
            </Link>
          </h3>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/products" data-test-id="products-link">
              Products
            </Link>{' '}
            {/* Products should be a dropdown products list when hovering*/}
            <Link href="/cart" className="cart-img">
              {/* <Image
                src="/img/shopping-cart.webp"
                alt="shopping-cart"
                width="50"
                height="50"
                style={{ marginRight: '2px'}}
              /> */}
              {totalItemsInCart > 0 && `${totalItemsInCart}`} Cart
            </Link>
          </nav>
        </header>
        {Math.floor(Math.random() * 10)}
        <main>{children}</main>
        <footer />
      </body>
    </html>
  );
}
