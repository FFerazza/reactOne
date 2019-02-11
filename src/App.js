import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component  {
   state = { 
    persons:  [
      { id:'1', name: "Adam", age: 250},
      { id:'2', name: 'Svend', age: 25},
      { id:'3',name: 'Bobby', age: 35}
    ],
    showPersons : false
  }

nameChangedHandler = (event, id) =>  {
  //here we find the person in the this.state.persons array that has the same id as the id we pass. so we run on this.state.persons a findIndex 
   const personIndex = this.state.persons.findIndex((pers) => {
    return pers.id === id;
   })


   //we do the following again to create another obj, as js objects are reference types
   // we could also use Object.assign() but that's old syntax

   const person = {...this.state.persons[personIndex]}
   person.name = event.target.value
  // same for the persons obj
   const persons = [...this.state.persons];
   persons[personIndex] = person;


  this.setState({
    persons: persons
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
      color: 'white',
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid #eee',
      padding: '8px',
      cursor: 'pointer',
      marginTop: '20px'
    }

    //let's handle dynamic content the JS way
    //since render() is called by react on every DOM update (stage or prop changes) we nest a variable inside render fn()

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person,index) => { 
          return <Person 
          key={person.id} 
          name={person.name} 
          age={person.age} 
          click={(index) => this.deletePersonHandler(index) } 
          changed={(event) => this.nameChangedHandler(event, person.id)}/> }) }
        </div>
      )

      style.backgroundColor = 'blue'
      
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
