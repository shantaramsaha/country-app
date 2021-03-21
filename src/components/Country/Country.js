import React from 'react';
import { Link } from 'react-router-dom';


const Country = (props) => {
    const friendStyle = {
        border: '2px solid blue',
        margin : '30px',
        padding: '15px',
        borderRadius: '20px'
    }
const {name,region,population,capital,borders,flag} = props.country;
    return (
        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <h3>Region: {region}</h3>
            <h4>Capital:{capital}</h4>
            <h5>Border:{borders}</h5>
            <p>Population: {population}</p>
    <h5>Flag:<Link to={`/country/${name}`}>Show detail {flag} </Link></h5>
        </div>
    );
};

export default Country;