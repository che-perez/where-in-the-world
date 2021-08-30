import { Link } from 'react-router-dom';

function BorderCountries(props) {

    let borderCountry = props.countries.filter(country => country.alpha3Code === props.countryCode );

  return (
      <li className="borders-countries__list--item">
          {borderCountry.map((country, idx) => {
              return (
                <Link className="borders-countries__country-link link-btn" key={ idx } to={`/${country.name.replace(/ /g, "-")}`}>
                    { country.name }
                </Link>
              )
          })}
      </li>
  );
}

export default BorderCountries;