import React, { Component } from 'react';
import logo from './Jive-logo.png';
import './App.css';
//import traceroute from 'traceroute';
//mport ping from 'ping';
//import net-ping from 'net-ping';
//import network-address from 'network-address';

class App extends Component {
  
  componentDidMount(){
    document.title = "Jive View"
  }
  constructor(props) {
    //set our initial state.
    super(props);
    this.state = {
    }
    //bind the button click handler
    this._onRunClicked.bind(this);
  }

  _onRunClicked(event) {
    alert("Hello world!");
    var ping = require ("net-ping");
    var session = ping.createSession ();
    
    var target = "8.8.8.8";

    var ping = require ("net-ping");
    netping();
    
    var value = 0;
    
    function netping() {
        var targets = ['8.8.8.8','8.8.4.4'];
    
        var session = ping.createSession ();
    
        for (var i = 0; i < targets.length; i++) {
            session.pingHost (targets[i], function (error, target, sent, rcvd) {
                var ms = rcvd - sent;
                if (error)
                    if (error instanceof ping.RequestTimedOutError)
                        console.log (target + ": timeout " + ms + " ms");
                    else
                        console.log (target + ": " + error.toString () + " (ms="+ ms + ")");
                else
                value = target + ": " + ms + " ms";
                console.log(value);
                // output 
                // 8.8.4.4: 6 ms
                // 8.8.8.8: 7 ms
            });
        }
    }
    
    console.log(value); // output 0
    
    module.exports = netping;
  }
  

  render() {
    return (
      <div className="App">
        <title>Jive View</title>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to The NEW Jive View</h1>
        </header>
        <p className="App-intro">
          <button classname='button' onClick={this._onRunClicked}>Click Here to Run Jive View</button>
        </p>
      </div>
    );
  }
}

export default App;