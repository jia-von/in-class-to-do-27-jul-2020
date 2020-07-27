import React from 'react';


class App extends React.Component 
{
  render ()
  {
    return (
      <>
      <h1>React To-Do App</h1>
      <form>
        <label htmlFor="newToDo">
          Enter a new "To-Do:"
          <input type="text" name="newToDo" id="newToDo" required/>
        </label>
        <input type ="submit" value="Add New To-Do"/>
      </form>
      <h2>Current To-Dos: </h2>
      <ul>
        
      </ul>
      </>
    );
  }
}

export default App;
