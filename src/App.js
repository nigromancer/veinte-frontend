import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Button } from '@material-ui/core';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

function App() {
  return (
    <Container>
        <img src={logo} className="App-logo" alt="logo" />
        <AccessAlarmIcon></AccessAlarmIcon>
        <Button variant="contained" color="primary">
          Hola Mundo!
        </Button>
    </Container>
  );
}

export default App;
