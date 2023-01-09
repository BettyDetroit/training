import React from 'react';

const Card = ({country}) => {
    return (
        <div className='card'>
            <li>
            <img src={country.flags.svg} alt={"drapeau"} className="drapeau" />
            <h1>{country.translations.fra.common}</h1>
            <h2>{country.region}</h2>
            <h3>{country.capital}</h3>
            </li>
        </div>
    );
};

export default Card;