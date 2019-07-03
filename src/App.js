import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Button } from '@material-ui/core';

function App() {
  return (
    <Container>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="contained" color="primary">
          Hola Mundo!
        </Button>
    </Container>
  );
}

export default App;
