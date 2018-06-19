import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id: '1', name: 'Max', age: 28},
      {id: '2', name: 'Maxqwdqwd', age: 43},
      {id: '3', name: 'Mefwefwe', age: 78},
    ],
    showPersons: true,
    toggleButton: 'hide'
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    const showOrnot = this.state.toggleButton;
    const toggleButton = this.state.toggleButton;
    this.setState({
      showPersons: !doesShow,
    });
    if (doesShow) {
      this.setState({
        toggleButton:'show'
      });
    } else {
      this.setState({
        toggleButton:'hide'
      });
    }
  };
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

    const assignedClasses = [];
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    let persons = null;
    let btnClass = '';
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
            <Person 
                      name={person.name}
                      age={person.age} 
                      key={person.id} 
                      click={() => this.deletePersonHandler(index)}
                      changed={(event) => this.nameChangeHandler(event, person.id)}
                      />
            );
          })}
        </div>
      );
      btnClass = classes.Red
    }

    return <div className={classes.App}>
          <h1 className={assignedClasses.join(" ")}>
            Hello, Im an app
          </h1>
          <button onClick={() => this.switchNameHandler()}>
            Switch name
          </button>
          <button onClick={this.togglePersonHandler} className={btnClass}>
            {this.state.toggleButton}
          </button>
          {persons}
        </div>;
  }
}

export default App;

