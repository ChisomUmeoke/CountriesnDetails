import React, { useEffect, useState } from "react";
import "./index.css";

const Ajo = () => {
  const [countries, setCountries] = useState([]);

  const getCountries = () => {
    try {
      fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((data) => setCountries(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className="country-group">
      {countries.map((country) => {
        return (
          <>
            <div className="country-row1-item1">
              <img
                className="country-image1"
                src={country.flags.svg}
                alt=""
                style={{ height: "170px", width: "280px" }}
              />
              <h5 className="country-name">{country.name.common}</h5>
              <p className="country-population">
                <b>Population: </b>
                {country.population}
              </p>
              <p className="country-region">
                <b>Region: </b>
                {country.region}
              </p>
              <p className="country-capital">
                <b>Capital: </b>
                {country.capital}
              </p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Ajo;
