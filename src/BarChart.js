
import React, {Component} from 'react';
import * as d3 from "d3";
import {select, csv, scaleLinear, max, scaleBand} from 'd3';


class BarChart extends Component {
componentWillMount() {
  this.drawChart();
  }

  drawChart(){
    let data = this.props.data;
    data.forEach((d) => {
      d.population = +d.population * 1000;
      console.log(d.population);
    })
    var margin = {top: 20, right: 20, bottom: 70, left: 40};
    let width = 600 - margin.left - margin.right;
    let height = 300 - margin.top - margin.bottom;

    const svg = d3.select("body").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform","translate(" + margin.left + "," + margin.top + ")");

  const xScale = scaleLinear()
        .domain([0, max(data, d => d.population)])
        .range([0, width])

  const yScale = scaleBand()
          .domain(data.map(d => d.country))
          .range([0, height])

          console.log(data);
      svg.selectAll('rect').data(data)
        .enter().append('rect')
          .attr('y', d => yScale(d.country))
          .attr('width', d => xScale(d.population))
          .attr('height', yScale.bandwidth());



  }

    render() {
      return <div></div>
    }
}

export default BarChart;
