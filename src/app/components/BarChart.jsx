"use client"; 
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import hardcodedData from '../../../public/data.json';

const BarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Simulated API call to fetch data
    const fetchData = async () => {
        let data;
      try {
        // Mocked response with json-server for DEV enviroment
        if (process.env.NODE_ENV === "development") {
            // console.log("process.env.NODE_ENV", process.env.NODE_ENV)
            data = await fetch('http://localhost:4000/array')
          .then(response => response.json())
          .catch(error => {
            console.error('Error fetching data:', error);
            return [];
          });
        } else {
        // Hardcoded data for "production" since this is only for demo
            data = hardcodedData
        }
        createChart(data);
        
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const createChart = data => {
      const width = 400;
      const height = 300;

      const svg = d3.select(chartRef.current)
        .append('svg')
        .attr('width', width)
        .attr('height', height);

      const xScale = d3.scaleBand()
        .domain(data.map((d, i) => i))
        .range([0, width])
        .padding(0.1);

      const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)])
        .range([height, 0]);

      svg.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', (d, i) => xScale(i))
        .attr('y', d => yScale(d.value))
        .attr('width', xScale.bandwidth())
        .attr('height', d => height - yScale(d.value))
        .attr('fill', 'steelblue');

      svg.append('g')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(xScale));

      svg.append('g')
        .call(d3.axisLeft(yScale));
    };

    fetchData();
  }, []);

  return <div ref={chartRef}></div>;
};

export default BarChart;
