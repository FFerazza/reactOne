import React, { useState } from 'react';
import Person from './Person/Person'
import './App.css';

const app = props => {
  const [person, setPerson] = useState({
    person: [
      { name: "pippo", age: 250},
      { name: 'peppo', age: 25}
    ]
  });
  const clickHandler = () =>  {
    setPerson({
      person: [
        { name: "pippo", age: 550},
        { name: 'gioppo', age: 125}
      ]
    })
  };

  return (
    <div className="App">
      <button onClick={clickHandler}>Press me!</button>
      <Person name={ person.person[0].name } age={ person.person[0].age }/>
      <Person name={ person.person[1].name } age={ person.person[1].age }/>
    </div>
  );
};

export default app;
