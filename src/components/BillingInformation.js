import { useState } from "react";
import { validateEmail } from "./subcomponents/BillingInformation/Utilities";

export default function BillingInformation() {
  // Basic Info
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Address
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");

  // Credit Details
  const [credit, setCredit] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCVV] = useState("");

  const getIsFormValid = () => {
    return (
      firstName &&
      lastName &&
      validateEmail(email) &&
      phone &&
      address &&
      city &&
      state &&
      zipcode &&
      credit &&
      expiration &&
      cvv
    );
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setCity("");
    setState("");
    setZipcode("");
    setCredit("");
    setExpiration("");
    setCVV("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Table reserved!");
    clearForm();
  };

  return (
    <>
      <h2>Billing Information</h2>
      <form className="billing" onSubmit={handleSubmit}>
            <label for="firstName">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              id="firstName"
              name="firstName"
            />
            <label for="lastName">Last Name</label>
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              id="lastName"
              name="lastName"
            />
            <label for="email">Email Address</label>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
            />
            <label for="phone">Phone Number</label>
            <input
              type="phone"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              id="phone"
              name="phone"
            />
            <label for="address">Billing Address</label>
            <input
              type="text"
              placeholder="Billing Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              id="address"
              name="address"
            />
            <label for="city">City</label>
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              id="city"
              name="city"
            />
            <label for="state">State</label>
            <input
              type="text"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              id="state"
              name="state"
            />
            <label for="zipcode">Zipcode</label>
            <input
              type="text"
              placeholder="Zipcode"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
              id="zipcode"
              name="zipcode"
            />
            <label for="credit">Credit Card Number</label>
            <input
              type="text"
              placeholder="Credit Card Number"
              value={credit}
              onChange={(e) => setCredit(e.target.value)}
              id="credit"
              name="credit"
            />
            <label for="expiration">Expiration Date</label>
            <input
              type="text"
              placeholder="Expiration Date"
              value={expiration}
              onChange={(e) => setExpiration(e.target.value)}
              id="expiration"
              name="expiration"
            />
            <label for="cvv">CVV</label>
            <input
              type="text"
              placeholder="Security Code (CVV)"
              value={cvv}
              onChange={(e) => setCVV(e.target.value)}
              id="cvv"
              name="cvv"
            />
          <button type="submit" disabled={!getIsFormValid()}>
            Reserve Table
          </button>
      </form>
    </>
  );
}
