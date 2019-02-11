import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component  {
   state = { 
    person:  [
      { name: "Adam", age: 250},
      { name: 'Svend', age: 25},
      { name: 'Bobby', age: 35}
    ],
    showPersons : false
  }

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

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons
  this.setState({showPersons : !doesShow})

}

  render(){
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }
  return (
    <div className="App">
      <button style={style} onClick={this.togglePersonsHandler}>Show persons!</button>
      { this.state.showPersons ? 
      <div>
        <Person
        name={ this.state.person[0].name } age={ this.state.person[0].age } click= {this.switchNameHandler.bind(this, 'Nick')}/>
        <Person 
        name={ this.state.person[1].name } age={ this.state.person[1].age } change= {this.changeHandler}/>
        <Person 
        name={ this.state.person[2].name } age={ this.state.person[2].age } click= { () => this.switchNameHandler('Matt')}/>
        </div> : null
      }
    </div>
  );
  }
};

export default App;
