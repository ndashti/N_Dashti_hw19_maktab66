import React, { useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";
import "./countrydetails.scss";
export default function CountryDetails() {
  let location = useLocation();
  const [data,setData]=useState();
  const [country,setCountry]=useState(location.state)

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
      <div>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
      <div className="card-image">
        <img  src={country.flags.png} alt="flag" />
        <div>
          <h2>{country.name}</h2>
          <div>
            <span>Native Name :</span>
            <span>{location.state.nativeName}</span>
          </div>
          <div>
            <span>Population :</span>
            <span>{country.population}</span>
          </div>
          <div>
            <span>Region :</span>
            <span>{country.region}</span>
          </div>
          <div>
            <span>Sub Region :</span>
            <span>{country.subregion}</span>
          </div>
          <div>
            <span>Capital :</span>
            <span>{country.capital}</span>
          </div>
        </div>
        <div>
          <div>
            <span>Top Level Domain :</span>
            <span>{country.topLevelDomain[0]}</span>
          </div>
          <div>
            <span>Currencies :</span>
            <span>{country.currencies[0]["name"]}</span>
          </div>
          <div>
            <span>Languages :</span>
            <span>{console.log(country.languages)}</span>
          </div>
        </div>
        <div>
          <span>Borders :</span>
          {country.borders.map((border) => {
            return <button onClick={()=>handleBorder({border})} className="btn-primary">{border}</button>;
          })}
        </div>
        <div></div>
      </div>
    </>
  );
}
