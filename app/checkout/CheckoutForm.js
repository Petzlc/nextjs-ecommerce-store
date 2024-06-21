'use client';
import { useState } from 'react';
import styles from './checkOut.module.scss';

export const metadata = {
  title: 'Checkout',
  description: 'This is the checkout page',
};

export default function CheckoutForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState();
  const [street, setStreet] = useState('');
  const [streetNumber, setStreetNumber] = useState();
  const [doorNumber, setDoorNumber] = useState();
  const [creditCardNumber, setCreditCardNumber] = useState();
  const [cvvCode, setCvvCode] = useState();
  const [expiryDate, setExpiryDate] = useState();

  return (
    <div className={styles.formContainer}>
      <h1>Checkout Page</h1>
      <form>
        {/* First name */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            <input
              value={firstName}
              onChange={(event) => setFirstName(event.currentTarget.value)}
              placeholder="First name"
            />
          </label>
          {/* Last name */}
          <label className={styles.label}>
            <input
              value={lastName}
              onChange={(event) => setLastName(event.currentTarget.value)}
              placeholder="Last name"
            />
          </label>
        </div>
        <div className={styles.inputGroup}>
          {/* Adress: Country */}
          <label className={styles.inputGroup}>
            <input
              className={styles.inputField}
              value={country}
              onChange={(event) => setCountry(event.currentTarget.value)}
              placeholder="Country"
            />
          </label>

          {/* city */}
          <label className={styles.label}>
            <input
              className={styles.inputField}
              value={city}
              onChange={(event) => setCity(event.currentTarget.value)}
              placeholder="City"
            />
          </label>
        </div>
        <div className={styles.inputGroup}>
          {/* zip code */}
          <label className={styles.label}>
            <input
              className={styles.inputField}
              type={Number}
              value={zipCode}
              onChange={(event) => setZipCode(event.currentTarget.value)}
              placeholder="zip code"
            />
          </label>
          {/* street */}
          <label className={styles.label}>
            <input
              className={styles.inputField}
              value={street}
              onChange={(event) => setStreet(event.currentTarget.value)}
              placeholder="Street"
            />
          </label>
          {/* streetnumber */}
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            <input
              className={styles.inputField}
              type={Number}
              value={streetNumber}
              onChange={(event) => setStreetNumber(event.currentTarget.value)}
              placeholder="Street number"
            />
          </label>
          {/* doornumber */}
          <label className={styles.label}>
            <input
              className={styles.inputField}
              type={Number}
              value={doorNumber}
              onChange={(event) => setDoorNumber(event.currentTarget.value)}
              placeholder="Door number"
            />
          </label>
          {/* creditcard: cardnumber*/}
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            <input
              className={styles.inputField}
              type={Number}
              value={creditCardNumber}
              onChange={(event) =>
                setCreditCardNumber(event.currentTarget.value)
              }
              placeholder="Credit card number"
            />
          </label>
          {/* cvv code */}
          <label className={styles.label}>
            <input
              className={styles.inputField}
              type={Number}
              value={cvvCode}
              onChange={(event) => setCvvCode(event.currentTarget.value)}
              placeholder="CVV Code"
            />
          </label>
          {/* Date of expiry */}
          </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            <input
              className={styles.inputField}
              type={Date}
              value={expiryDate}
              onChange={(event) => setExpiryDate(event.currentTarget.value)}
              placeholder="Expiry date"
            />
          </label>
        </div>
      </form>
    </div>
  );
}
