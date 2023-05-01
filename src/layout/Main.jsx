import React, { useState, useEffect } from "react";
import { MovieList } from "../components/MovieList";
import { Search } from "../components/Search";
import { Preloader } from "../components/Preloader";

const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=saw`)
      .then(res => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setItems(data.Search); //Search - название массива объектов в поиске 
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  const searchMovies = (str, type, items) => {
    //нужно доработать if
    if (!str) {
      str = 'saw';
    }
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
      .then(res => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setItems(data.Search); //Search - название массива объектов в поиске 
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )

  }

  // if (error) {
  //   return <div>Ошибка: {error.message}</div>;
  // } else if (!isLoaded) {
  //   return <Preloader />;
  // } else {
  //   return <main className="container content">
  //     <Search searchMovies={searchMovies} />
  //     {
  //       <MovieList items={items} />
  //     }
  //   </main>
  // }



  // if (error) {
  //   // return <div>Ошибка: {error.message}</div>;
  // } else if () {
  //   return ;
  // } else {

  // }

  return <main className="container content">
    <Search searchMovies={searchMovies} />
    {!isLoaded ? <Preloader /> : <MovieList items={items} error={error} />}
  </main>
}



export { Main }