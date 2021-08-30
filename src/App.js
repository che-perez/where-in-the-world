import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import './scss/style.scss'

import Countries from './components/Countries';

function App() {

  const [countriesList, setCountriesList] = useState([]);
  const [currentRegion, setCurrentRegion] = useState('All');
  const [searchCountry, setSearchCountry] = useState('');
  const [bacgroundMode, setBackgroundMode] = useState(false);

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then(res => res.json())
      .then(data => {
        setCountriesList(data)
      })
  },[]);

  let filteredRegion = countriesList.filter(country => {
    if(currentRegion === "All" && searchCountry === '') {
      return country
    } else if (searchCountry) {
      return country.name === searchCountry
    } else {
      return  country.region === currentRegion
    }
  })

  return (
    <Router>
      <main className={`App ${bacgroundMode ? 'darkmode' : 'lightmode'}`}>
        <header className="App_header">
          <div className="App_header--inside">
            <Link to="/"><h1 className="App_header--heading">Where in the World?</h1></Link>
            <button onClick={() => setBackgroundMode(!bacgroundMode)} className="App_header--button">
              <ion-icon name={bacgroundMode ? "moon" : "moon-outline"}></ion-icon>Dark Mode</button>
          </div>
        </header>
        <div className="container">
          <section className="App_content">
            <Countries countriesList={ filteredRegion }
                      setCurrentRegion={setCurrentRegion}
                      searchCountry={searchCountry}
                      setSearchCountry={setSearchCountry} />
          </section>
        </div>
      </main>
    </Router>
  );
}

export default App;
