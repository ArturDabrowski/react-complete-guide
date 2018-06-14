import React from 'react';

const person = (props) => {
    return <div>
        <p onClick={props.click}>
          {props.name} {props.age}{" "}
        </p>
      </div>;
}

export default person;