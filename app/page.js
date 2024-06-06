import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <header>
        <h1>E-Commerce</h1>
        <div>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/products" data-test-id="products-link">
                  Products
                </Link>{' '}
                {/* Should be a dropdown products list when hovering*/}
              </li>
              <li>
                <Link href="/cart">Cart</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <body></body>
    </div>
  );
}
