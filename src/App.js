import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from './components/Main';
import Footer from './components/Footer';
import React, { useState } from 'react';


function App() {
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [availableTimes, setAvailableTimes] = useState("");
  const [occasion, setOccasion] = useState("");

  return (
    <>
      <body>
      <Nav />
      <Header />
        <Main 
        guests={guests}
        setGuests={setGuests}
        date={date}
        setDate={setDate}
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
        occasion={occasion}
        setOccasion={setOccasion}
        />
        <Footer />
      </body>
    </>
  );
}

export default App;
