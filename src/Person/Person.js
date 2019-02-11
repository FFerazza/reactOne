import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>Hello, my name is {props.name} and I am {props.age}</p>
            <input onChange={props.changed} value={props.name}/>
        </div>
    )


}

export default person;