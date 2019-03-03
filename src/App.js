import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as d3 from "d3";
import BarChart from './BarChart';
class App extends Component {
  state = {
    data: [{country: "China", population: "1415046"},
          {country: "India", population: "1354052"},
          {country: "United States", population: "354052"},
          {country: "Indonesia", population: "266052"},
          {country: "Brazil", population: "210852"},
          {country: "Pakistan", population: "200852"},
          {country: "Nigeria", population: "194000"},
   ],
    width: 700,
    height: 500,
  }

  render() {
    return (
      <div className="App">
        <div className="App">
         <BarChart data={this.state.data} w={this.state.width} h={this.state.height} />
       </div>
      </div>
    );
  }
}

export default App;
