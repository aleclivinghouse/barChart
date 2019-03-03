
import React, {Component} from 'react';
import * as d3 from "d3";
import {select, csv, scaleLinear, max, scaleBand, axisLeft, axisBottom} from 'd3';


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
    var margin = {top: 20, right: 20, bottom: 70, left: 100};
    let width = 600 - margin.left - margin.right;
    let height = 300 - margin.top - margin.bottom;
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const svg = d3.select("body").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)

  const g = svg.append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`)

  const xScale = scaleLinear()
        .domain([0, max(data, d => d.population)])
        .range([0, innerWidth])

  const yScale = scaleBand()
          .domain(data.map(d => d.country))
          .range([0, innerHeight])

  const yAxis = axisLeft(yScale);
  const xAxis = axisBottom(xScale)

      g.selectAll('rect').data(data)
        .enter().append('rect')
          .attr('y', d => yScale(d.country))
          .attr('width', d => xScale(d.population))
          .attr('height', yScale.bandwidth());

      yAxis(g.append('g'));
      xAxis(g.append('g').attr('transform', `translate(0, ${innerHeight})`));

  }

    render() {
      return <div></div>
    }
}

export default BarChart;
