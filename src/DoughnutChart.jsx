import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['First Attempt', 'Second Attempt', 'Third Attempt', 'Fourth Attempt',],
  datasets: [
    {
      label: '# of Votes',
      data: [[12, 19, 3, 5],[31, 2, 1, 0]],
      backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        
      ],
      borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
        
      ],
      borderWidth: 1,
    },
  ],
};

let newdata = [];

export default function App(props) {
  return (<div style={{height:'400px', width:'400px'}}>
    
    <Doughnut data={data} />
  </div>);
}
