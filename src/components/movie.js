/* eslint-disable react/prop-types */
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Movie(props) {
  return (
    <Card key={props.movie.id} style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src={'https://image.tmdb.org/t/p/w500' + props.movie.poster_path}
      />
      <Card.Body>
        <Card.Title>{props.movie.title}</Card.Title>
        <Card.Text>{props.movie.overview}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Movie;
