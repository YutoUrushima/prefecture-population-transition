import { Line } from "react-chartjs-2";
import React, { useState, useEffect } from "react";
import axios from "axios";

interface props {
  pref: number;
}

const apiKey = process.env.REACT_APP_APIKEY ? process.env.REACT_APP_APIKEY : "";

const Chart: React.FC<props> = (props) => {
  const [chartData, setChartData] = useState({});
  const url = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${props.pref}`;
  const templateData = () => {
    let empPopulation: number[] = [];
    axios
      .get(url, {
        headers: {
          "X-API-KEY": apiKey
        }
      })
      .then((res) => {
        const fetchedData = res.data.result.data[0].data;
        empPopulation.push(fetchedData[2].value);
        empPopulation.push(fetchedData[4].value);
        empPopulation.push(fetchedData[6].value);
        empPopulation.push(fetchedData[8].value);
        empPopulation.push(fetchedData[10].value);
        empPopulation.push(fetchedData[12].value);
        // console.log(empPopulation);
        setChartData({
          labels: ["1970", "1980", "1990", "2000", "2010", "2020"],
          datasets: [
            {
              label: "population",
              data: empPopulation,
              backgroundColor: ["rgba(255, 99, 132, 0.2)"],
              borderColor: ["rgba(255, 99, 132, 1)"],
              borderWidth: 2
            }
          ]
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  useEffect(() => {
    templateData();
  }, [props.pref]);
  return (
    <div>
      <Line
        data={chartData}
        options={{
          responsive: true,
          title: {
            text: "THICKNESS SCALE",
            display: true,
            scales: {
              yAxes: {
                ticks: {
                  beginAtZero: true
                }
              }
            }
          }
        }}
      />
    </div>
  );
};

export default Chart;
