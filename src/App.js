import React, { Component } from 'react';
import Overview from './components/Overview';


class App extends Component {
  constructor(props) {
    super(props);
    // this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked() {
    alert('yayy!')
  }

  render() {
    return (
      <div>
        <Overview/>
        <form>
          <label>
            New Todo
          </label>
          <input type="text"/>
          <input type="submit" value="Submit" onClick={this.buttonClicked}/>
        </form>
      </div>
    );
  }
}

export default App;
