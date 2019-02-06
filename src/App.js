import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person name="Max" age="26"/>
      </div>
    );
  }
}

export default App;
