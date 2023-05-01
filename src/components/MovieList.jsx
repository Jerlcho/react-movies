import React from "react";
import { Movie } from "./Movie";

function MovieList(props) {
  const { items = [], error } = props;

  // return <div className="movies">
  //   {
  //     items.map(item => (
  //       <Movie key={item.imdbID} {...item} />
  //     ))
  //   }
  // </div>

  // return <div className="movies">
  //   {items.length ? items.map(item => (
  //     <Movie key={item.imdbID} {...item} />
  //   )) : error ? <div>Error: {error && error.message}</div> : <h2>Not Found!</h2>
  //   }
  // </div>

  return <div className="movies">
    {items.length ? (
      items.map(item => <Movie key={item.imdbID} {...item} />)
    ) : error ? (
      <div>Error: {error && error.message}</div>
    ) : (
      <h2>Not Found!</h2>
    )}
  </div>
}

export { MovieList };