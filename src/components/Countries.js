import React from "react";
import { Link } from "react-router-dom";

import "./countries.scss";

import CountryDetails from "../pages/CountryDetails";

export default function Countries({ country }) {
  return (
    <li>
      <Link to={`/countrydetails`} state={country}>
        <article className="card" key={country.id}>
          <div className="card-image">
            <img src={country.flag} alt={country.name} />
          </div>
          <div className="card-content">
            <h2 className="card-name">{country.name}</h2>
            <ol className="card-list">
              <li>
                population: <span>{country.population}</span>
              </li>
              <li>
                Region: <span>{country.region}</span>
              </li>
              <li>
                Capital: <span>{country.capital}</span>
              </li>
            </ol>
          </div>
        </article>
      </Link>
    </li>
  );
}
