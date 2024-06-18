import { cookies } from 'next/headers'; //bsp. Lukas
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductInsecure } from '../../../database/products'; // was without Insecure first
import QuantityButtonPage from '../../QuantityButtonPage';

// import styles from './SingleProductPage.module.scss';

export default async function SingleProductPage(props) {
  const singleProduct = await getProductInsecure(
    Number(props.params.productId),
  );
  if (!singleProduct) {
    notFound();
  }

  const addProductsToCartCookies = cookies().get('addQuantityCookie');
  let quantityButton = addProductsToCartCookies
    ? JSON.parse(addProductsToCartCookies.value)
    : [];

  const addProductsToDisplay = quantityButton.find(
    (item) => item.id === Number(props.params.productId),
  );
  const quantityToDisplay = addProductsToDisplay
    ? addProductsToDisplay.quantity
    : 0;

  // const addProductsToCartCookies = cookies().get('quantityButton'); // bsp. Lukas man muss nicht add to cart importieren weil ich alles in quantityButton mache

  // // console.log(addProductsToCartCookie);

  // const quantityButton = JSON.parse(addProductsToCartCookies.value); // ebenfalls lukas bsp.

  // // console.log(quantityButton);

  // const addProductsToDisplay = quantityButton.find((quantityButton) => {
  //   return quantityButton.id === singleProduct.id;
  // });
  // const for individual style for the single products. it does not work since i can somehow not overwrite the height and width of the <image> element
  // const imageClass = styles[`image${singleProduct.name}`];
  return (
    <div>
      <h1>{singleProduct.name}</h1>
      <div /* className={className}*/>
        <Image
          src={`/img/${singleProduct.name}.webp`}
          alt={`${singleProduct.name}`}
          // className={imageClass}
          width="143" // 53*2,7 //"106" //"159"
          height="659" // 244*2,7 //"488" //"732"
        />
      </div>
      <div>Quantity in Cart: {quantityToDisplay}</div>
      <QuantityButtonPage productId={singleProduct.id} />
    </div>
  );
}
