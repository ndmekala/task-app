import React, { Component } from 'react';
import Overview from './components/Overview';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ['pickle'],
    }
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked(event) {
    event.preventDefault();
    this.setState({
      message: this.state.message.splice(0, 0, 'peanut')
    })
    console.table((this.state.message))

  }

  render() {
    return (
      <div>
        <Overview greeting={this.state.message} />
        <form>
          <label>
            New Todo
          </label>
          <input type="text"/>
          <input type="submit" value="Submit" onClick={this.buttonClicked}/>
          
        </form>
        <button onClick={this.buttonClicked}>click me</button>
      </div>
    );
  }
}

export default App;
