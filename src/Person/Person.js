import React from 'react';
import classes from './Person.css'

const person = (props) => {

    return <div className={classes.Person}>
        <p onClick={props.click}>
          {props.name} {props.age}{props.children}
          <input type="text" onChange={props.changed} value={props.name}/>
        </p>
      </div>;
}

export default person;