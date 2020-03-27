import React from 'react';
import axios from 'axios';
import Movies from '../components/movies';
import 'bootstrap/dist/css/bootstrap.min.css';
require('dotenv').config();

class NowPlaying extends React.Component {
  state = {
    movies: [],
    loading: false,
    error: null
  };

  async componentDidMount() {
    try {
      console.log(this.props.match.params);
      this.setState({ loading: true });
      const movies = await axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${this.props.match.params.id}`
      });
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
          <h1>Now playing</h1>
          <Movies movies={this.state.movies} />
        </div>
      );
    }
  }
}

export default NowPlaying;
