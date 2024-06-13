import Image from 'next/image';
import { getProduct } from '../../../database/products';
import QuantityButton from '../../QuantityButton';

// import styles from './SingleProductPage.module.scss';

export default function SingleProductPage(props) {
  const singleProduct = getProduct(Number(props.params.productId));

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
      <QuantityButton />
    </div>
  );
}
