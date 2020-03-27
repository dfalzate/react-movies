import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import axios from 'axios';
import Movies from './components/movies';
require('dotenv').config();

class App extends React.Component {
  state = {
    movies: [],
    loading: false,
    error: null
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const movies = await axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
        params: {
          _page: 1
        }
      });
      console.log(movies.data.results);
      this.setState({
        movies: movies.data.results
      });
    } catch (error) {
      this.setState({ error: error });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    if (this.state.loading === true) {
      return <h2>Loading...</h2>;
    } else if (this.state.error) {
      return <h2>{this.state.error}</h2>;
    } else if (this.state.loading === false) {
      return (
        <div className="movies">
          <h1>Movies</h1>
          <Movies movies={this.state.movies} />
        </div>
      );
    }
  }
}

export default App;
