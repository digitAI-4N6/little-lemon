import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from './components/Main';
import Footer from './components/Footer';
import React, { useState } from 'react';


function App() {

  return (
    <>
      <Nav />
      <Header />
        <Main />
        <Footer />
    </>
  );
}

export default App;
