/* eslint-disable react/prop-types */
import React from 'react';
import Movie from './movie';
import styled from 'styled-components';

const MoviesStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function Movies(props) {
  return (
    <MoviesStyle>
      {props.movies.map(movie => {
        return <Movie key={movie.id} movie={movie} />;
      })}
    </MoviesStyle>
  );
}

export default Movies;
