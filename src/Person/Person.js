import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>Pirla {props.name} {props.age}</p>
            <input onChange={props.change} value={props.name}/>
        </div>
    )


}

export default person;