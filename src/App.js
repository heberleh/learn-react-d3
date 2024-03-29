import React, { Component } from 'react'
import './App.css'
import Header from './components/ReactD3/Header'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import BarChart from './components/BarChart/BarChart'

import ComicsQueries from './ComicsQueries'
import StackedBarChart from './components/StackedBarChart/StackedBarChart';

class App extends Component {
  constructor(props){
    super(props);
    this.title = "D3 & React - Comics Abilities";
    this.author = "Henry Heberle"
    this.authorUrl = "https://heberleh.github.io"
  }
  
  render() {


    return (
      <div className="App">
        <Header title={this.title} author={this.author} authorUrl={this.authorUrl}/>
       
 

       <div class="row">

        <div class="col-md-3">          
          <BarChart dataModel={ComicsQueries.skillsDistribution()}/>        
        </div>

        <div class="col-md-9">          
          <StackedBarChart dataModel={ComicsQueries.skillsDistributionByGender()}/> 
        </div>

       </div>
       
      </div>
    );
  }
}

export default App;
