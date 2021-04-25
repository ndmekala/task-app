import React, { Component } from 'react';

class Overview extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <ul>
            <li>{this.props.title}</li>
          </ul>
        </div>
      );
    }
  }

export default Overview;