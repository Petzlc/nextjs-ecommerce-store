import Link from 'next/link';

export const metadata = {
  title: 'Thank You',
  description: 'Thank you page after purchase',
};

export default function ThankYouPage() {
  return (
    <div>
      <h1>Thank You For Your Order!</h1>
      <br />
      <p>Enjoy the products and come back soon!</p>
      <br />
      <button>
        <Link href="/">Back to Home</Link>
      </button>
      <br />
      <button>
        <Link href="/products">Back to Products</Link>
      </button>
    </div>
  );
}
