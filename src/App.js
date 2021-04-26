import React, { Component } from 'react';
import Overview from './components/Overview';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskArray: [],
      value: '',
    }


    this.buttonClicked = this.buttonClicked.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  buttonClicked(event) {
    event.preventDefault();
    this.setState({
      taskArray: this.state.taskArray.concat(this.state.value)
    })

  }

  render() {
    return (
      <div>
        <Overview tasks={this.state.taskArray} />
        <form onSubmit={this.buttonClicked}>
          <label>
            New Todo
          </label>
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
          <input type="submit" value="Submit"/>
          
        </form>
      </div>
    );
  }
}

export default App;
