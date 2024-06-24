'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './checkOut.module.scss';

export default function CheckoutForm() {
  const router = useRouter;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState();
  const [street, setStreet] = useState('');
  const [streetNumber, setStreetNumber] = useState();
  const [doorNumber, setDoorNumber] = useState();
  const [creditCardNumber, setCreditCardNumber] = useState();
  const [cvvCode, setCvvCode] = useState();
  const [expiryDate, setExpiryDate] = useState();

  function clearAllInputFields() {
    setFirstName('');
    setLastName('');
    setEmail('');
    setCountry('');
    setCity('');
    setZipCode('');
    setStreet('');
    setStreetNumber('');
    setDoorNumber('');
    setCreditCardNumber('');
    setCvvCode('');
    setExpiryDate('');

    router.push('/thank-you');
  }

  // check if every input field is filled out
  const isFormComplete =
    firstName &&
    lastName &&
    email &&
    country &&
    city &&
    zipCode &&
    street &&
    streetNumber &&
    doorNumber &&
    creditCardNumber &&
    cvvCode &&
    expiryDate;

  return (
    <div className={styles.formContainer}>
      <h1>Checkout Page</h1>
      <form>
        {/* First name */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            First Name:
            <input
              className={styles.inputField}
              value={firstName}
              onChange={(event) => setFirstName(event.currentTarget.value)}
              placeholder="First name"
              required
            />
          </label>
          {/* Last name */}
          <label className={styles.label}>
            Last Name:
            <input
              className={styles.inputField}
              value={lastName}
              onChange={(event) => setLastName(event.currentTarget.value)}
              placeholder="Last name"
              required
            />
          </label>
        </div>
        <div className={styles.inputGroup}>
          {/* Email */}
          <label className={styles.label}>
            Email:
            <input
              className={styles.inputField}
              type="email"
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)}
              placeholder="Email"
              required
            />
          </label>
        </div>
        <div className={styles.inputGroup}>
          {/* Adress: Country */}
          <label className={styles.label}>
            Country:
            <input
              className={styles.inputField}
              value={country}
              onChange={(event) => setCountry(event.currentTarget.value)}
              placeholder="Country"
              required
            />
          </label>

          {/* city */}
          <label className={styles.label}>
            City:
            <input
              className={styles.inputField}
              value={city}
              onChange={(event) => setCity(event.currentTarget.value)}
              placeholder="City"
              required
            />
          </label>
        </div>
        <div className={styles.inputGroup}>
          {/* zip code */}
          <label className={styles.label}>
            Zip Code:
            <input
              className={styles.inputField}
              type={Number}
              value={zipCode}
              onChange={(event) => setZipCode(event.currentTarget.value)}
              placeholder="zip code"
              required
            />
          </label>
          {/* street */}
          <label className={styles.label}>
            Street:
            <input
              className={styles.inputField}
              value={street}
              onChange={(event) => setStreet(event.currentTarget.value)}
              placeholder="Street"
              required
            />
          </label>
          {/* streetnumber */}
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            Street Number:
            <input
              className={styles.inputField}
              type={Number}
              value={streetNumber}
              onChange={(event) => setStreetNumber(event.currentTarget.value)}
              placeholder="Street number"
              required
            />
          </label>
          {/* doornumber */}
          <label className={styles.label}>
            {' '}
            Door Number:
            <input
              className={styles.inputField}
              type={Number}
              value={doorNumber}
              onChange={(event) => setDoorNumber(event.currentTarget.value)}
              placeholder="Door number"
              required
            />
          </label>
          {/* creditcard: cardnumber*/}
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            Credit Card Number:
            <input
              className={styles.inputField}
              type={Number}
              value={creditCardNumber}
              onChange={(event) =>
                setCreditCardNumber(event.currentTarget.value)
              }
              placeholder="Credit Card Number"
              required
            />
          </label>
          {/* cvv code */}
          <label className={styles.label}>
            CVV Code:
            <input
              className={styles.inputField}
              type={Number}
              value={cvvCode}
              onChange={(event) => setCvvCode(event.currentTarget.value)}
              placeholder="CVV Code"
              required
            />
          </label>
          {/* Date of expiry */}
        </div>
        {/* <div className={styles.inputGroup}> */}
        <label className={styles.label}>
          Date of Expiry:
          <input
            className={styles.inputField}
            type={Date}
            value={expiryDate}
            onChange={(event) => setExpiryDate(event.currentTarget.value)}
            placeholder="Expiry date"
            required
          />
        </label>
        {/* </div> */}
        <br />
        <br />
        <Link href="/thankyou">
          <button
            className="confirmButton"
            type="button"
            onClick={clearAllInputFields}
            disabled={!isFormComplete}
            // disabled={
            //   !firstName ||
            //   !lastName ||
            //   !email ||
            //   !country ||
            //   !city ||
            //   !zipCode ||
            //   !street ||
            //   !streetNumber ||
            //   !doorNumber ||
            //   !creditCardNumber ||
            //   !cvvCode ||
            //   !expiryDate
            // }
          >
            Confirm Order
          </button>
        </Link>
      </form>
    </div>
  );
}
