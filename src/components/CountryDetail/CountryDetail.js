import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const {countryName} = useParams();
    const [country ,setCountry] = useState({});
    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/all/${countryName}`    
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data))
    },[])
    return (
        <div>
            <p>This is country detail component: {countryName}</p>
            <h3>{countryName}</h3>
            <h3>Region: {country.region}</h3>
            <h4>Capital:{country.capital}</h4>
            <h5>Border:{country.borders}</h5>
            <p>Population: {country.population}</p>
        </div>
    );
};

export default CountryDetail;