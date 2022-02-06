import React, { Component } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

/* const data = [
  {name: 'Page A', pv: 2400, amt: 2400},
  {name: 'Page B', pv: 1398, amt: 2210},
  {name: 'Page C', pv: 9800, amt: 2290},
  {name: 'Page D', pv: 3908, amt: 2000},
  {name: 'Page E', pv: 4800, amt: 2181},
  {name: 'Page F', pv: 3800, amt: 2500},
  {name: 'Page G', pv: 4300, amt: 2100},
]; */

const data = [
  {
    original: "GAS DE COZINHA 13 KG",
    mean: 58.54978723404257,
    max: 85.0,
    min: 6.84,
    count: 94,
  },
  {
    original: "GAS GLP 13 KG",
    mean: 61.76632183908046,
    max: 156.66,
    min: 30.8,
    count: 87,
  },
  {
    original: "GAS GLP, ACONDICIONADO EM BOTIJAO RETORNAVEL DE 13 KG",
    mean: 69.12164705882353,
    max: 190.0,
    min: 33.9,
    count: 85,
  },
  {
    original: "GAS 13 KG",
    mean: 64.45500000000001,
    max: 104.0,
    min: 35.9,
    count: 70,
  },
  {
    original:
      "GAS DE COZINHA A GRANEL RESIDENCIAL  BOTIJAO PESANDO 13 KG  SEM VASILHAME-2409",
    mean: 51.53739130434783,
    max: 73.0,
    min: 35.63,
    count: 69,
  },
  {
    original: "BOTIJAO DE GAS 13 KG P13-4159",
    mean: 53.06666666666668,
    max: 60.0,
    min: 49.5,
    count: 60,
  },
  {
    original: "BOTIJAO DE GAS 13 KG",
    mean: 73.6856862745098,
    max: 218.0,
    min: 29.89,
    count: 51,
  },
  {
    original: "GAS LIQUEFEITO DE PETROLEO",
    mean: 61.56821428571429,
    max: 95.0,
    min: 39.9,
    count: 28,
  },
  {
    original: "GAS ACONDICIONADO EM BOTIJOES P-13",
    mean: 63.849999999999994,
    max: 88.0,
    min: 44.0,
    count: 26,
  },
  {
    original: "RECARGA DE GAS GLP 13 KG",
    mean: 65.49384615384616,
    max: 98.0,
    min: 38.9,
    count: 26,
  },
];
class SimpleLineChart extends Component {
  render() {
    return (
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <Line
          type="monotone"
          dataKey="max"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <YAxis />
        <XAxis dataKey="original" />
        <Legend />
      </LineChart>
    );
  }
}

export default SimpleLineChart;
