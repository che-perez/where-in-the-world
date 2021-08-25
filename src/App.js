import { useState, useEffect } from 'react';
import './App.css';

import Countries from './components/Countries';

function App() {

  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then(res => res.json())
      .then(data => {
        setCountriesList(data)
        console.log(data);
      })
  },[]);

  return (
    <div className="App">
      <header>
        <h1>Where in the World?</h1>
        </header>
        <section>
          <Countries countriesList={ countriesList } />
        </section>
    </div>
  );
}

export default App;
