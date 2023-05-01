import React, { useState } from "react";

function Search(props) {
  const { searchMovies } = props;
  const [search, setSearchValue] = useState('');
  const [type, setType] = useState('all');

  const handleKey = (event) => {
    if (event.key === 'Enter') {
      searchMovies(search, type);
    }
  }

  const handleFilter = (event) => {
    const newType = event.target.value;
    setType(newType);
    searchMovies(search, newType)
  }

  return <div className="row">

    <div className="input-field">
      <input className="validate" placeholder="Search" type="search" value={search} onChange={(e) => setSearchValue(e.target.value)} onKeyDown={handleKey} />
      <button className="btn search-btn" onClick={() => searchMovies(search, type)}>Search</button>
    </div>
    <div>
      <label>
        <input className="with-gap" name="type" type="radio" value="all" onChange={handleFilter} checked={type === 'all'} />
        <span>All</span>
      </label>

      <label>
        <input className="with-gap" name="type" type="radio" value="movie" onChange={handleFilter} checked={type === 'movie'} />
        <span>Movie</span>
      </label>


      <label>
        <input className="with-gap" name="type" type="radio" value="series" onChange={handleFilter} checked={type === 'series'} />
        <span>Series</span>
      </label>
    </div>

  </div>
}

export { Search }