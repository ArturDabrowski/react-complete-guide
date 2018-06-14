import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Maxqwdqwd', age: 43},
      {name: 'Mefwefwe', age: 78},
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 29},
        {name: 'Dab', age: 29},
        {name: 'Dab', age: 29}
      ]
    })
  }

  render() {
    return <div className="App">
        <h1>Hello, Im a React app</h1>
        <button onClick={() => this.switchNameHandler()}>Switch name</button>
        <Person>Siemano, jak leci ?</Person>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this, "Andzeju")} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>;
  }
}

export default App;

