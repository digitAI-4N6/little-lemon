import { useState } from "react";

export default function BillingInformation() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <>
      <ul className="Basic Info">
        <li>
          <p>Billing Information</p>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </li>
        <li>
          <label>Last name</label>
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </li>
        <li>
        <label>
          Email address<sup>*</sup>
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
          Phone number<sup>*</sup>
        </label>
        <input
          type="phone"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        </li>
      </ul>
    </>
  );
}
