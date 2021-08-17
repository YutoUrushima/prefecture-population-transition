import { Line } from "react-chartjs-2";
import React, { useState, useEffect } from "react";
import axios from "axios";

const url =
  "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=31";

const apiKey = process.env.REACT_APP_APIKEY ? process.env.REACT_APP_APIKEY : "";

const Chart = () => {
  const [dataChart, setDataChart] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      let confirmedCases: any = [];
      let dateOfCases: any = [];
      await axios.get(`${url}?access_key=${apiKey}`).then((res) => {
        for (let dataObj of res.data) {
          confirmedCases.push(parseInt(dataObj.Cases));
          let tempDate = new Date(dataObj.Date);
          dateOfCases.push(tempDate.getUTCMonth() + 1 + "/" + tempDate.getUTCDate());
        }
      });
      setDataChart({
        labels: dateOfCases, //x軸ラベル
        datasets: [
          {
            label: "新型コロナウイルス感染者数の推移（日本）", //y軸のラベル
            backgroundColor: "rgba(75,192,192,0.4)", //グラフの色
            borderColor: "rgba(75,192,192)", //
            borderWidth: 1,
            data: confirmedCases //y軸ラベル
          }
        ]
      });
    };
    fetchData();
  }, []);

  const options = {
    legend: {
      display: true //y軸のラベル表示
    },
    scales: {
      yAxes: [
        {
          ticks: {
            max: 26000,
            min: 0
            //stepSize: 3
          }
        }
      ],
      xAxes: [
        {
          type: "time",
          time: {
            unit: "month",
            displayFormats: {
              quarter: "MMM YYYY"
            }
          }
        }
      ]
    },
    title: {
      display: true, //グラフのタイトル表示
      text: ["グラフの", "タイトル"] //グラフのタイトルは改行もできる
    }
  };
  return (
    <div>
      <Line data={dataChart} options={options} />
    </div>
  );
};

export default Chart;
