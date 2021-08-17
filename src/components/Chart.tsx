import { Line } from "react-chartjs-2";
import React, { useState, useEffect } from "react";
// import axios from "axios";

// const url =
//   "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=31";

// const apiKey = process.env.REACT_APP_APIKEY ? process.env.REACT_APP_APIKEY : "";

const Chart = () => {
  const [chartData, setChartData] = useState({});
  const templateData = () => {
    setChartData({
      labels: ["1970", "1980", "1990", "2000", "2010", "2020"],
      datasets: [
        {
          label: "population",
          data: [1, 2, 3, 4, 5, 6],
          backgroundColor: ["rgba(255, 99, 132, 0.2)"],
          borderColor: ["rgba(255, 99, 132, 1)"],
          borderWidth: 1
        }
      ]
    });
  };
  useEffect(() => {
    templateData();
  }, []);
  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default Chart;
