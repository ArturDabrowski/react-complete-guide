import React from 'react';
import Person from './Person.css';
import Radium from "radium";


const person = (props) => {
  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  }
    return <div className="Person" style={style}>
        <p onClick={props.click}>
          {props.name} {props.age}{props.children}
          <input type="text" onChange={props.changed} value={props.name}/>
        </p>
      </div>;
}

export default Radium(person);