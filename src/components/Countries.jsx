import { useState } from 'react';

function Countries(props) {

  return (
      <>
      <ul>
          {props.countriesList.map((country, idx) => {
              return (
                <li key={ idx }>
                    <div>
                        <img src={ country.flag } alt={ country.name }/>
                    </div>
                    <div>
                        <h2>{ country.name }</h2>
                        <p><span>Population:</span> {country.population.toLocaleString('en-US')}</p>
                        <p><span>Region:</span> {country.region}</p>
                        <p><span>Capital:</span> {country.capital}</p>
                    </div>
                </li>
              )
          })}
      </ul>
      </>
  );
}

export default Countries;