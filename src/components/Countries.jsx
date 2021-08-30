import { Switch, Route, Link } from 'react-router-dom';

import SingleCountry from './SingleCountry';
import SearchFilter from './SearchFilter';

function Countries(props) {

  return (
      <>
        <Switch>
            <Route path="/:countryname">
                <SingleCountry countries={ props.countriesList }/>
            </Route>
            <Route path="/">
                <SearchFilter setCurrentRegion={props.setCurrentRegion} searchCountry={props.searchCountry} setSearchCountry={props.setSearchCountry}/>
                <ul className="countries-list">
                    {props.countriesList.map((country, idx) => {
                        return (
                            <Link key={ idx } to={`/${country.name.replace(/ /g, "-")}`}>
                                <li className="countries-list__item">
                                    <div className="countries-list__item--flag">
                                        <img className="countries-list__item--flag__img" src={ country.flag } alt={ country.name }/>
                                    </div>
                                    <div className="countries-list__item--info">
                                        <h2 className="countries-list__item--info__heading">{ country.name }</h2>
                                        <p className="countries-list__item--info__details"><span>Population:</span> {country.population.toLocaleString('en-US')}</p>
                                        <p className="countries-list__item--info__details"><span>Region:</span> {country.region}</p>
                                        <p className="countries-list__item--info__details"><span>Capital:</span> {country.capital ? country.capital  : "None"}</p>
                                    </div>
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </Route>
        </Switch>
      </>
  );
}

export default Countries;