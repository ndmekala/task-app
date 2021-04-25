import React, { Component } from 'react';
import Overview from './components/Overview';

function App() {
  return (
    <div>
      <Overview title='hi'/>
      <form>
        <label>
          New Todo
        </label>
        <input type="text"/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}

export default App;
