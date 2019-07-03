import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

function App() {
  return (
    <Container>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Icon>star</Icon>
        <Button variant="contained" color="primary">
          Hola Mundo!
        </Button>
    </Container>
  );
}

export default App;
