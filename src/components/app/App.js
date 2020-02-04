import React from 'react';
import logo from './../../logo.svg';
import './App.css';
import ToDo from './../todo/ToDo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToDo/>
      </header>
    </div>
  );
}

export default App;
