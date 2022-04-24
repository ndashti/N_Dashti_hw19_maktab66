import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import CountryDetails from "./pages/CountryDetails";
import CountryList from "./pages/CountryList";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CountryList />} />
        <Route path="/countrydetails" element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
