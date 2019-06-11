import React, { Component } from 'react'
import './App.css'
import Header from './components/ReactD3/Header'

import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import BarChart from './components/BarChart/BarChart'

import ComicsQueries from './ComicsQueries'
import StackedBarChart from './components/StackedBarChart/StackedBarChart';

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
       
       <div class="row">

        <div class="col-md-3">
          <BarChart dataModel={ComicsQueries.skillsDistribution()}/>        
        </div>

        <div class="col-md-8">          
          <StackedBarChart dataModel={ComicsQueries.skillsDistributionByGender()}/> 
        </div>

       </div>
       
      </div>
    );
  }
}

export default App;


// #Marvel Database
// # Jun 2019

// SELECT ?nameLabel ?conflictLabel
// WHERE
// {
// 	?name wdt:P31 wd:Q1114461;   	
//          wdt:P1080 wd:Q931597.
  
//     ?name wdt:P607 ?conflict.
// #   
// #   ?name wdt:P2563 ?skills.
// #   OPTIONAL {?name wdt:P21 ?gender.
// #   OPTIONAL {?name wdt:P3417 ?quora.}
// #   OPTIONAL {?name wdt:P106 ?occupation.}
// #   
//   SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE]". }