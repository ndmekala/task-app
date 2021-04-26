import React, { Component } from 'react';

class Overview extends Component {
    constructor(props) {
      super(props);
    }

  
    render() {
      return (
        <div>
          <ul>
            {this.props.tasks.map((task) => <li key={task}>{task}</li>)}
          </ul>
        </div>
      );
    }
  }

export default Overview;