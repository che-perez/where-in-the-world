import { useParams, Link } from 'react-router-dom';
import BorderCountries from './BorderCountries';

function SingleCountry(props) {
    let { countryname } = useParams();
    let countryName = countryname.replace(/-/g, ' ');

    let countryDetails = props.countries.filter(country => country.name === countryName );

  return (
      <div className="single-country">
          <Link className="link-btn" to="/"><ion-icon name="arrow-back-outline"></ion-icon>Back</Link>
          {countryDetails.map((country, idx) => {
              return (
                  <div className="single-country__container" key={idx}>
                    <div className="single-country__container--flag">
                        <img src={ country.flag } alt={ country.name }/>
                    </div>
                    <div className="single-country__container--details">
                        <h2>{ country.name }</h2>
                        <p className="detail"><span className="detail-title">Native Name:</span> {country.nativeName}</p>
                        <p className="detail"><span className="detail-title">Population:</span> {country.population.toLocaleString('en-US')}</p>
                        <p className="detail"><span className="detail-title">Region:</span> {country.region}</p>
                        <p className="detail"><span className="detail-title">Sub Region:</span> {country.subregion}</p>
                        <p className="detail"><span className="detail-title">Capital:</span> {country.capital ? country.capital  : "None"}</p>
                        <p className="detail"><span className="detail-title">Top Level Domain:</span> {country.topLevelDomain[0]}</p>
                        <p className="detail"><span className="detail-title">Currencies:</span> {country.currencies[0].name}</p>
                        <p className="detail languages">
                            <span className="detail-title">Languages: </span>
                            {country.languages.map((language, idx) => {
                                if(idx === (country.languages.length - 1)) {
                                    return (
                                        <span key={idx}>{ language.name }</span>
                                    )
                                } else {
                                    return (
                                        <span key={idx}>{`${language.name}, `}</span>
                                    )
                                }
                            }
                            )}
                        </p>
                        {country.borders.length > 0 ?
                        <div className="borders-countries">
                            <span>Border Countries:</span>
                            <ul className="borders-countries__list">
                                {country.borders.map(code => 
                                    <BorderCountries countries={props.countries} countryCode={ code }/>
                                )}
                            </ul>
                        </div> : '' }
                    </div>
                  </div>
              )
          })}
      </div>
  );
}

export default SingleCountry;