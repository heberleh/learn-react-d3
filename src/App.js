import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class App extends Component {
  constructor(props){
    super(props);
    this.title = "D3 & React";
    this.author = "Henry Heberle"
    this.authorUrl = "https://heberleh.github.io"
  }
  
  render() {
    return (
      <div className="App">
        <Header title={this.title} author={this.author} authorUrl={this.authorUrl}/>
      </div>
    );
  }
}

export default App;
