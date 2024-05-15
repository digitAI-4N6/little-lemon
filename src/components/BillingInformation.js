import { useState } from "react";

export default function BillingInformation() {
  // Basic Info
  const [name, setName] = useState("");
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

  return (
    <>
      <h2>Billing Information</h2>
      <form className="billing">
        <ul className="basicInfo">
          <li>
            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </li>
          <li>
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </li>
          <li>
            <label>
              Email Address
            </label>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>
          <li>
            <label>
              Phone Number
            </label>
            <input
              type="phone"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </li>
        {/* </ul>
        <ul className="address"> */}
          <li>
            <label>Billing Address</label>
            <input
              type="text"
              placeholder="Billing Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </li>
          <li>
            <label>City</label>
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </li>
          <li>
            <label>
              State
            </label>
            <input
              type="text"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </li>
          <li>
            <label>
              Zipcode
            </label>
            <input
              type="text"
              placeholder="Zipcode"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
            />
          </li>
        {/* </ul>
        <ul className="creditDetails"> */}
          <li>
            <label>Credit Card Number</label>
            <input
              type="text"
              placeholder="Credit Card Number"
              value={credit}
              onChange={(e) => setCredit(e.target.value)}
            />
          </li>
          <li>
            <label>
              Expiration Date
            </label>
            <input
              type="text"
              placeholder="Expiration Date"
              value={expiration}
              onChange={(e) => setExpiration(e.target.value)}
            />
          </li>
          <li>
            <label>
              CVV
            </label>
            <input
              type="text"
              placeholder="Security Code (CVV)"
              value={cvv}
              onChange={(e) => setCVV(e.target.value)}
            />
          </li>
        </ul>
      </form>
    </>
  );
}
