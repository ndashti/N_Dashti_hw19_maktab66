import React, { useState,useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";

import { ThemeContext } from '../context/themeContext'

import "./countrydetails.scss";


export default function CountryDetails() {
  let location = useLocation();
  const [data,setData]=useState();
  const [country,setCountry]=useState(location.state)

  const { theme } = useContext(ThemeContext);

  const handleBorder=(bo)=>{
    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => {
        setData(response.data);
      })
      const found=(data.find(name=> name.alpha3Code == bo.border))
      setCountry(found)
  }
  return (
    <>
      <Header />
      <div className={`${theme}`}>
      <div>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
      <div className="card-image-detail">
        <div>
        <img  src={country.flags.png} alt="flag" />
        </div>
        <div>
          <h2>{country.name}</h2>
            <p>Native Name : <span>{location.state.nativeName}</span></p>
            
            <p>Population :<span>{country.population}</span></p>
            
            <p>Region :<span>{country.region}</span></p>
            

            <p>Sub Region :<span>{country.subregion}</span></p>
            
 
            <p>Capital :<span>{country.capital}</span></p>
            
 
    
            <p>Top Level Domain :<span>{country.topLevelDomain[0]}</span></p>
            
     
            <p>Currencies :<span>{country.currencies[0]["name"]}</span></p>
            
         
            <p>Languages :{country.languages.map((lang) => (<span key={lang.name}>{lang.name + "  "}</span>))}</p>
            
         
        <div>
          <p>Borders :</p>
          {country.borders.map((border) => {
            return <button onClick={()=>handleBorder({border})} className="btn-primary">{border}</button>;
          })}
        </div>
        </div>
      </div>
      </div>
    </>
  );
}
