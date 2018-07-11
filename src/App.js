import React, { Component } from 'react';
import logo from './Jive-logo.png';
import './App.css';
//import traceroute from 

class App extends Component {

  constructor(props) {
    
    //set our initial state.
    super(props);
    this.state = {
    }
    //bind the button click handler
    this._onRunClicked.bind(this);
  }

  _onRunClicked(event) {
    //const Traceroute = require('traceroute');
    //const trace = Traceroute.trace('google.com');
    
    //  event.preventDefault();
    //  const Traceroute = require('traceroute');

    //  Traceroute.trace('google.com', (err, hops) => {
        

    //  if (err) {
    //      throw err;
    //  }

    //  console.log(hops);
    //});
  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to The NEW Jive View</h1>
        </header>
        <p className="App-intro">
          <button>Click Here to Run Jive View</button>
        </p>
      </div>
    );
  }
}

export default App;