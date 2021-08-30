
function SearchFilter(props) {

    const changeRegion = (e) => props.setCurrentRegion(e.target.value)
    
  return (
      <div className="search-filter-container">
        <div className="search-filter-container__search-field">
            <input value={props.searchCountry} placeholder="Search for a country..." onChange={e => props.setSearchCountry(e.target.value)} />
        </div>
        <div className="search-filter-container__filter-field">
            <div>
                <label htmlFor="regions">Filter by Region: </label>
                <select id="regions" name="regions" onChange={e => changeRegion(e)}>
                    <option value="All">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Polar">Polar</option>
                </select>
            </div>
        </div>
      </div>
  );
}

export default SearchFilter;