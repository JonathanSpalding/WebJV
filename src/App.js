import React, { Component } from 'react';
import logo from './Jive-logo.png';
import './App.css';
//import traceroute from 'traceroute';
import ping from 'ping';
//import net-ping from 'net-ping';
//import network-address from 'network-address';
import { Button } from 'reactstrap';

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
    var ping = require('ping');
 
    var hosts = ['192.168.1.1', 'google.com', 'yahoo.com'];
    hosts.forEach(function(host){
        ping.sys.probe(host, function(isAlive){
            var msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
            console.log(msg);
        });
    });
  }
  render() {
    return (
      <div className="App">
        <title>Jive View</title>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the NEW Jive View</h1>
        </header>
        <p className="App-intro">
          <Button bsStyle="successs" bsSize="large" block onClick={this._onRunClicked}>Click Here to Run Jive View</Button>
        </p>
      </div>
    );
  }
}

export default App;