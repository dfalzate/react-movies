/* eslint-disable no-undef */
import React from 'react';
import axios from 'axios';
import Movies from '../components/movies';
import 'bootstrap/dist/css/bootstrap.min.css';
import dotenv from 'dotenv';
dotenv.config();

function reducer(state, action) {
  switch (action.type) {
    case 'setMovies':
      return {
        ...state,
        movies: action.payload
      };
    case 'setLoading':
      return {
        ...state,
        loading: action.payload
      };

    case 'setError':
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

let initialState = {
  movies: [],
  loading: false,
  error: null
};

function useMovies() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  React.useEffect(() => {
    dispatch({ type: 'setLoading', payload: true });
    axios({
      method: 'get',
      url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    })
      .then(data => dispatch({ type: 'setMovies', payload: data.data.results }))
      .catch(error => dispatch({ type: 'setError', payload: error }))
      .finally(dispatch({ type: 'setLoading', payload: false }));
  }, []);
  return state;
}

function TopRated() {
  const state = useMovies();

  if (state.loading) {
    return <h2>Loading...</h2>;
  } else if (state.error) {
    return <h2>{error}</h2>;
  } else if (!state.loading) {
    return (
      <div className="movies">
        <h1>Top rated</h1>
        <Movies movies={state.movies} />
      </div>
    );
  }
}

export default TopRated;
