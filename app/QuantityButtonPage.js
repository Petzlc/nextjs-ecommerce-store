'use client';
import { useState } from 'react';
import { createOrUpdateCookie } from './products/[productId]/action';

export default function QuantityButtonPage({ productId }) {
  // State to manage the quantity of the product, default value 0
  const [quantity, setQuantity] = useState(1);
  // const [quantityCookie, setQuantityCookie] = useState(0);

  // State to add quantity to cart
  //const [addQuantity, setAddQuantity] = useState(0);

  // Function to increment the quantity by 1
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  // Function to handle changes in the input field
  const handleInputChange = (event) => {
    const value = event.target.value;

    // Check if the value is a valid number
    if (!isNaN(value) && value >= 0) {
      setQuantity(Number(value));
    }
  };

  const handleAddToCart = async () => {
    await createOrUpdateCookie(productId, quantity);
    alert(`Added ${quantity} of product ${productId} to cart`);
  };
  return (
    <div>
      <div>
        <button
          onClick={handleIncrement}
          // formAction={async () => await createOrUpdateCookie(quantity)}
        >
          Add 1
        </button>
        <input
          type="number"
          value={quantity}
          onChange={handleInputChange}
          min="0"
          step="1"
        />
        <button
          onClick={handleAddToCart} // {async () => await createOrUpdateCookie(quantityCookie)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
