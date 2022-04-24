import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home'
import Snacks from './components/Snacks'
import Sweets from './components/Sweets'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/snacks" element={<Snacks />} />
        <Route path="/sweets" element={<Sweets />} />
      </Routes>

    </>

  );
}

export default App;
