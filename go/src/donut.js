import React,{Component} from 'react';
import {Doughnut} from 'react-chartjs-2';

const data = {
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ],
    hoverBackgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ]
  }]
};

function Donutchart() {
  return (
    <container className ="donut-container">
    
        
    <span>
        <h3>data</h3>
        <Doughnut data={data} />
    </span>
    
    <span>
    <h3>data</h3>
    <Doughnut data={data} />
    </span>
    
    <span>
        <h3>data</h3>
        <Doughnut data={data} />
    </span>
    
    </container>
  );
}
export default Donutchart;