import React from 'react';
import Person from './Person.css'

const person = (props) => {
    return <div className="Person">
        <p onClick={props.click}>
          {props.name} {props.age}{props.children}
          <input type="text" onChange={props.changed} value={props.name}/>
        </p>
      </div>;
}

export default person;