import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom';
import Home from './pages/Home';
import NowPlaying from './pages/NowPlaying';
import Popular from './pages/Popular';
import TopRated from './pages/TopRated';
import UpComing from './pages/UpComing';
import styled from 'styled-components';

const LinkStyled = styled(Link)`
  background-color: Gray;
  color: white;
  height: 3em;
  width: 8em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  &:hover {
    background-color: lightgray;
    text-decoration: none;
  }
`;

const MenuStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 1em;
  margin-bottom: 1em;
`;

function App() {
  return (
    <Router>
      <MenuStyle>
        <LinkStyled to="/">Home</LinkStyled>
        <LinkStyled to="/nowplaying/1">Now playing</LinkStyled>
        <LinkStyled to="/popular">Popular</LinkStyled>
        <LinkStyled to="/toprated">Top rated</LinkStyled>
        <LinkStyled to="/upcoming">Up coming</LinkStyled>
      </MenuStyle>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/nowplaying/:id" component={NowPlaying} />
        <Route exact path="/popular" component={Popular} />
        <Route exact path="/toprated" component={TopRated} />
        <Route exact path="/upcoming" component={UpComing} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
