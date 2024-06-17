'use client';
import { useState } from 'react';

export default function QuantityButton() {
  // State to manage the quantity of the product, default value 0
  const [quantity, setQuantity] = useState(1);
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
  return (
    <div>
      <div>
        <button onClick={handleIncrement}>Add 1</button>
        <input type="number" value={quantity} onChange={handleInputChange} />
      </div>
    </div>
  );
}
