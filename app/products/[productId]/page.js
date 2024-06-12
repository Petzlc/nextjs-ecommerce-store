import Image from 'next/image';
import { getProduct } from '../../../database/products';

export default function SingleProductPage(props) {
  const singleProduct = getProduct(Number(props.params.productId));
  return (
    <div>
      <h1>{singleProduct.name}</h1>
      <div>
        <Image
          src={`/img/${singleProduct.name}.webp`}
          alt={`${singleProduct.name}`}
          width="53"
          height="244"
        />
      </div>
    </div>
  );
}
