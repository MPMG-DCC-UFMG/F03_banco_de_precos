import React, { Component } from "react";
import axios from "axios";
import _map from "lodash/map";

import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import classnames from "classnames";
import { NavLink } from "react-router-dom";
import {
  Row,
  Col,
  Button,
  CardHeader,
  Card,
  CardBody,
  Progress,
  TabContent,
  TabPane,
} from "reactstrap";

import PageTitle from "../AppMain/PageTitle";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ComposedChart,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  AreaChart,
  Area,
} from "recharts";

import {
  faAngleUp,
  faArrowRight,
  faArrowUp,
  faArrowLeft,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppHeader from "../../../../../Layout/AppHeader";
import { search } from "./Utils";
import { ActivityIndicator } from "react-native";

export default class javascriptMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  getData() {
    axios
      .get(
        "http://127.0.0.1:8000/api/items/match/?limit=10&offset=0&order=desc&year=2018&description=GAS%20GLP,%20ACONDICIONADO%20EM%20BOTIJAO%20RETORNAVEL%20DE%2013%20KG&unit_measure=unidade&group=gas_7"
      )
      .then((res) => {
        var data = res.data;
        this.setState({ data: data });
      });
  }
  componentDidMount() {
    this.getData();
  }
  render() {
    const { data } = this.state;
    console.log(data.sort((a, b) => (a.mes > b.mes ? 1 : -1)));

    let monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ];

    const getXValueData2 = (data) => {
      const index = monthNames[data["mes"]];

      return index;
    };

    return (
      <div>
        <h2 className="tituloGrafico">Média de preços</h2>
        {/*   <LineChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="qtde_item" stroke="red" dot={false} />
          <XAxis dataKey={getXValueData2} />
          <YAxis />
        </LineChart> */}

        <LineChart width={550} height={300} data={data}>
          <Line
            type="monotone"
            dataKey="qtde_item"
            stroke="#008080	"
            strokeWidth={2}
           
          />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={getXValueData2} label={{ value: "Meses", dy: 15 }} />
          <YAxis
            label={{ value: "Quantidade de Itens", angle: -90, dx: -12 }}
          />

          <Tooltip
            label="{qtde_item}"
            labelFormatter={(qtde_item) => "Mês: " + qtde_item}
          />
        </LineChart>
      </div>
    );
  }
}
