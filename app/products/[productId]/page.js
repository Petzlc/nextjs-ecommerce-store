import { getProduct } from '../../../database/products';

export default function SingleProductPage(props) {
  const singleProduct = getProduct(Number(props.params.productId));
  console.log('props: ', singleProduct);
  return <div>SingleProductPage</div>;
}
