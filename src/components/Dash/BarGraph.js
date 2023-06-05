import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";

function BarChart({ data }) {
  
    const options = {
    plugins: {
      title: {
        display: true,
        text: `Inntekter og avgifter`,
      },
      legend: {
        display: false,
      },
    },
  };

  const chartData = {
    labels: data.data.map(item => item.sumTax),
    datasets: [
      {
        data: data.data.map(item => item.sumRow),
        borderColor: 'black',
        backgroundColor: '#292b2c',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div style={{ width: 700 }}>
      <Bar data={chartData} options={options} />
    </div>
  );
}

export default BarChart;