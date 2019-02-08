import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>Pirla {props.name} {props.age}</p>
            <input onChange={props.change} value={props.name}/>
        </div>
    )


}

export default person;