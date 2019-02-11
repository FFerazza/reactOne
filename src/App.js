import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component  {
   state = { 
    persons:  [
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

deletePersonHandler = (personIndex) =>  {
  // below code is a bad idea, since arrays and objs in js are reference types, here i'm creating a persons which is just a pointer to the this.state.persons
  // const persons = this.state.persons;
  // better create a new array like this
  // const persons = this.state.persons.splice()  - splice argumentless create a new array
  // or use es6 spread operator to create a new one, like below
  const persons = [...this.state.persons]
  persons.splice(personIndex,1);
  this.setState({persons: persons})
  console.log(this.state.persons)
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

    //let's handle dynamic content the JS way
    //since render() is called by react on every DOM update (stage or prop changes) we nest a variable inside render fn()

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person,index) => <Person name={person.name} age={person.age} click={(index) => this.deletePersonHandler(index) }/> ) }
        </div>
      )


      
    }

  return (
    <div className="App">
      <button style={style} onClick={this.togglePersonsHandler}>Show persons!</button>
      {persons}
    </div>
  );
  }
};

export default App;
