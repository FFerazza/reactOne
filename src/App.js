import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component  {
   state = { 
    person:  [
      { name: "Adam", age: 250},
      { name: 'Svend', age: 25},
      { name: 'Bobby', age: 35}
    ]}
switchNameHandler = (newName) =>  {
  this.setState({
    person: [
      { name: "Filippo", age: 550},
      { name: newName, age: 125},
      { name: 'Bobby', age: 35}
    ]
  })
};

changeHandler = (evt) =>  {
  this.setState({
    person: [
      { name: "Filippo", age: 550},
      { name: evt.target.value, age: 125},
      { name: 'Bobby', age: 35}
    ]
  })
};

  render(){
  return (
    <div className="App">
      <button onClick={this.clickHandler}>Press me!</button>
      <Person
      name={ this.state.person[0].name } age={ this.state.person[0].age } click= {this.switchNameHandler.bind(this, 'Nick')}/>
      <Person 
      name={ this.state.person[1].name } age={ this.state.person[1].age } change= {this.changeHandler}/>
      <Person 
      name={ this.state.person[2].name } age={ this.state.person[2].age } click= { () => this.switchNameHandler('Matt')}/>
    </div>
  );
  }
};

export default App;
