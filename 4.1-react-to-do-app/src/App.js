import React from 'react';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component
{
  constructor ( props )
  {
    super( props );

    this.state = {
      newToDo: "", // Keep track of our new to-do value.
      toDos: [] // Keep track of all the todos.
    };
  }

  // Add a new todo (see onSubmit in our form below.)
  addToDo = ( event ) =>
  {
    event.preventDefault(); // Stop the page from reloading.
    //console.log( "Test add todo!" );

    //Set up new task.
    const newTask = {
      uniqueId : uuidv4(), //Ensure a unique ID. 
      value: this.state.newToDo
    };
    console.log(newTask);

    const currentToDoList = [...this.state.toDos]
    currentToDoList.push(newTask);

    this.setState({
      toDos: currentToDoList,
      newToDo: ""
    });
  }

 

  updateItem ( key, value )
  {
    // We never re-assign the contents of this.state.
    // this.state is ONLY USED FOR READING VALUES, NOT writing.
    // When we need to update anything in state, we need to use this.setState()
    // this.setState() triggers the render() method, so we can see updated state info in our presentation.
    this.setState( {[key]: value} );
  }

  render ()
  {
    return (
      <>
        <h1>React To-Do App</h1>
        <form onSubmit={this.addToDo}>
          <label htmlFor="newToDo">
            Enter a new "To-Do:"
            <input
              type="text"
              name="newToDo"
              id="newToDo"
              required
              value={this.state.newToDo}
              onChange={event => this.updateItem( 'newToDo', event.target.value )} />
          </label>
          <input type="submit" value="Add New To-Do" />
        </form>
        <h2>Current To-Dos:</h2>
        <ul>

        </ul>
      </>
    );
  }
}

export default App;

