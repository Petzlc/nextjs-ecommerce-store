'use client';
import { useState } from 'react';

export default function CheckoutForm() {
  const [firstName, setFirstName] = useState('');
  return (
    <div>
      <h1>Checkout Page</h1>
      <form>
        {/* First name */}
        <label>
          <input
            value={firstName}
            onChange={(event) => setFirstName(event.currentTarget.value)}
            placeholder="First name"
          />
        </label>
        {/* Last name */}
        <label>
          <input
            value={lastName}
            onChange={(event) => setlastName(event.currentTarget.value)}
            placeholder="Last name"
          />
        </label>
        {/* Adress: Country */}
        <label>
          <input
            value={country}
            onChange={(event) => setCountry(event.currentTarget.value)}
            placeholder="Country"
          />
        </label>
        {/* city */}
        <label>
          <input
            value={city}
            onChange={(event) => setCity(event.currentTarget.value)}
            placeholder="City"
          />
        </label>
        {/* zip code */}
        <label>
          <input
            type={Number}
            value={zipCode}
            onChange={(event) => setZipCode(event.currentTarget.value)}
            placeholder="zip code"
          />
        </label>
        {/* street */}
        <label>
          <input
            value={street}
            onChange={(event) => setStreet(event.currentTarget.value)}
            placeholder="Street"
          />
        </label>
        {/* streetnumber */}
        <label>
          <input
            type={Number}
            value={streetNumber}
            onChange={(event) => setStreetNumber(event.currentTarget.value)}
            placeholder="Street number"
          />
        </label>
        {/* doornumber */}
        <label>
          <input
            type={Number}
            value={doorNumber}
            onChange={(event) => setDoorNumber(event.currentTarget.value)}
            placeholder="Door number"
          />
        </label>
        {/* creditcard: cardnumber*/}
        <label>
          <input
            type={Number}
            value={creditCardNumber}
            onChange={(event) => setCreditCardNumber(event.currentTarget.value)}
            placeholder="Credit card number"
          />
        </label>
        {/* Date of expiry */}
        <label>
          <input
            type={Date}
            value={expiryDate}
            onChange={(event) => setExpiryDate(event.currentTarget.value)}
            placeholder="Expiry date"
          />
        </label>
      </form>
    </div>
  );
}
