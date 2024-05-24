import React, { useState } from "react";
import { validateEmail } from "./subcomponents/BillingInformation/Utilities";
import BookingForm from "./subcomponents/BookingForm";

export default function BillingInformation() {
  // Reservation Details
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

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
      guests &&
      date &&
      time &&
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
    setGuests("");
    setDate("");
    setTime("");
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
      <h2>Reservation Details</h2>
      <BookingForm />
    </>
  );
}
