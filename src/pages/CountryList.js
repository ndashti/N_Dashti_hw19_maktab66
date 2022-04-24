import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "../components/Header";
import Countries from "../components/Countries";

import "./CountryList.scss";

export default function CountryList() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["capital", "name", "numericCode"]);
  const [filterParam, setFilterParam] = useState("All");

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  function search(items) {
    console.log(filterParam);
    console.log("q", q);
    return items.filter((item) => {
      if (item.region === filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem]?.toString().toLowerCase().indexOf(q.toLowerCase()) > -1 
          );
        });
      } else if (filterParam === "All") {
        return searchParam.some((newItem) => {
          return (
            item[newItem]?.toString().toLowerCase().indexOf(q.toLowerCase()) > -1 
          );
        });
      }
    });
  }

  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <div className="wrapper">
        <div className="search-wrapper">
          <label htmlFor="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Search for..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <span className="sr-only">Search countries here</span>
          </label>

          <div className="select">
            <select
              onChange={(e) => {
                setFilterParam(e.target.value);
              }}
              className="custom-select"
              aria-label="Filter Countries By Region"
            >
              <option value="All">Filter By Region</option>
              <option value="Africa">Africa</option>
              <option value="Americas">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
            <span className="focus"></span>
          </div>
        </div>
        <ul className="card-grid">
          {search(items).map((country) => (
            <Countries key={country.name} country={country} />
          ))}
        </ul>
      </div>
    );
  }
}
