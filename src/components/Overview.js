import React, { Component } from 'react';

class Overview extends Component {
    constructor(props) {
      super(props);

      this.state = {
        greeting: 'dingus',
      }

      this.overviewClicked = this.overviewClicked.bind(this)
    }

    overviewClicked() {
      this.setState(
        {
          greeting: 'yahoo!'
        }
      )
    }
  
    render() {
      return (
        <div>
          <ul>
            <li>{this.state.greeting}</li>
          </ul>
          <button onClick={this.overviewClicked}>Overview btn</button>
        </div>
      );
    }
  }

export default Overview;