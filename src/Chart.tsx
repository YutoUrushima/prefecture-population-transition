import { Line } from "react-chartjs-2";
import React from "react";

const Chart = () => {
  const data = {
    labels: ["1970", "1980", "1990", "2000", "2010", "2020"],
    datasets: [
      {
        label: "Population Transition",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ["rgba(255, 99, 132, 1)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1
      }
    ]
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };
  return (
    <div>
      <Line data={data} width={100} height={50} options={options} />
    </div>
  );
};

export default Chart;
