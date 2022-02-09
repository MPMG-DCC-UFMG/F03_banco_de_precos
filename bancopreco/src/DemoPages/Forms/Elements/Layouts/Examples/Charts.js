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
import "./Charts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppHeader from "../../../../../Layout/AppHeader";
import { search } from "./Utils";
import { ActivityIndicator } from "react-native";
import React, { useState, useEffect, Component, Fragment } from "react";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Page C", uv: 2000, pv: 6800, amt: 2290 },
  { name: "Page D", uv: 4780, pv: 7908, amt: 2000 },
  { name: "Page E", uv: 2890, pv: 9800, amt: 2181 },
  { name: "Page F", uv: 1390, pv: 3800, amt: 1500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const data2 = [
  { name: "Page A", uv: 5400, pv: 5240, amt: 1240 },
  { name: "Page B", uv: 7300, pv: 4139, amt: 3221 },
  { name: "Page C", uv: 8200, pv: 7980, amt: 5229 },
  { name: "Page D", uv: 6278, pv: 4390, amt: 3200 },
  { name: "Page E", uv: 3189, pv: 7480, amt: 6218 },
  { name: "Page D", uv: 9478, pv: 6790, amt: 2200 },
  { name: "Page E", uv: 1289, pv: 1980, amt: 7218 },
  { name: "Page F", uv: 3139, pv: 2380, amt: 5150 },
  { name: "Page G", uv: 5349, pv: 3430, amt: 3210 },
];

const dataApi = [
  {
    original:
      "ITEM 10973: BOTIJAO DE GAS CONTENDO 13 (TREZE) QUILOGRAMAS CADA, PARA REPOSICAO, DE GAS LIQUEFEITO DE PETROLEO (GLP), COMPOSTO DE PROPANO E BUTANO",
    dsc_unidade_medida: "unidade",
    ano: 2014,
    grupo: "item_3",
    mean: 41.4,
    max: 42,
    min: 41,
    count: 5,
  },

  {
    original: "GAS GLP, ACONDICIONADO EM BOTIJAO RETORNAVEL DE 13 KG",
    dsc_unidade_medida: "unidade",
    ano: 2014,
    grupo: "gas_7",
    mean: 46.260000000000005,
    max: 51.9,
    min: 42.5,
    count: 5,
  },
  {
    original: "GAS GLP, ACONDICIONADO EM BOTIJAO RETORNAVEL DE 13 KG",
    dsc_unidade_medida: "unidade",
    ano: 2015,
    grupo: "gas_7",
    mean: 48.61666666666667,
    max: 59,
    min: 43,
    count: 12,
  },
  {
    original: "GAS GLP, ACONDICIONADO EM BOTIJAO RETORNAVEL DE 13 KG",
    dsc_unidade_medida: "unidade",
    ano: 2016,
    grupo: "gas_7",
    mean: 56.585,
    max: 63.75,
    min: 51,
    count: 10,
  },
  {
    original: "GAS GLP, ACONDICIONADO EM BOTIJAO RETORNAVEL DE 13 KG",
    dsc_unidade_medida: "unidade",
    ano: 2017,
    grupo: "gas_7",
    mean: 59.888888888888886,
    max: 67,
    min: 46.5,
    count: 9,
  },

  {
    original:
      "GAS LIQUEFEITO DE PETROLEO  ACONDICIONADO EM CILINDRO DE 13 KG  (P13 LIQUIDO)  COMPOSICAO BASICA: PROPANO E BUTANO   MATERIAL TOXICO E INFLAMAVEL  DE ACORDO COM AS LEGISLACOES VIGENTES DA ANP E ABNT",
    dsc_unidade_medida: "botijao",
    ano: 2018,
    grupo: "gas_11",
    mean: 70.63,
    max: 74.59,
    min: 67,
    count: 5,
  },
  {
    original: "GAS GLP, ACONDICIONADO EM BOTIJAO RETORNAVEL DE 13 KG",
    dsc_unidade_medida: "unidade",
    ano: 2018,
    grupo: "gas_7",
    mean: 75.345,
    max: 89.25,
    min: 63.95,
    count: 10,
  },
  {
    original: "GAS GLP, ACONDICIONADO EM BOTIJAO RETORNAVEL DE 13 KG",
    dsc_unidade_medida: "unidade",
    ano: 2019,
    grupo: "gas_7",
    mean: 74.45625,
    max: 80.25,
    min: 66,
    count: 8,
  },
  {
    original: "GAS GLP, ACONDICIONADO EM BOTIJAO RETORNAVEL DE 13 KG",
    dsc_unidade_medida: "unidade",
    ano: 2020,
    grupo: "gas_7",
    mean: 76.41666666666667,
    max: 89,
    min: 66.5,
    count: 9,
  },

  {
    original: "GAS GLP, ACONDICIONADO EM BOTIJAO RETORNAVEL DE 13 KG",
    dsc_unidade_medida: "unidade",
    ano: 2021,
    grupo: "gas_7",
    mean: 79.178,
    max: 102,
    min: 64.39,
    count: 5,
  },
];

export default class Charts extends Component {
  state = {
    loading: false,
    dadosApiCharts: [],
  };

  componentDidMount() {
    this.search(this.props.data.original);
  }

  search = async (val) => {
    this.setState({ loading: true });

    const url = `http://127.0.0.1:8000/api/items/match/?limit=10&offset=0&order=desc&year=${this.props.data.ano}&description=${val}&unit_measure=${this.props.data.dsc_unidade_medida}&group=${this.props.data.grupo}`;
    const results = await search(url);
    const dadosApiCharts = results;
    this.setState({ dadosApiCharts: dadosApiCharts, loading: false });

    console.log("response.JSON:", {
      message: "Request received",
      data: dadosApiCharts,
    });
  };

  render() {
    if (this.state.loading) {
      return (
        <div>
          <ActivityIndicator size={80} style={{ flex: 1 }} />
        </div>
      );
    }

    return (
      <div>
        <Fragment>
          <ReactCSSTransitionGroup
            component="div"
            transitionName="TabsAnimation"
            transitionAppear={true}
            transitionAppearTimeout={0}
            transitionEnter={false}
            transitionLeave={false}
          >
            <div className="chartsPrincipal">
              <PageTitle
                subheading={this.props.data.original}
                icon="pe-7s-graph1"
                subheading2={this.props.data.dsc_unidade_medida}
                subheading3={this.props.data.ano}
                subheading4={this.props.data.grupo}
              />

              <Row>
                <Col md="4">
                  <div className="card mb-3 widget-chart">
                    <div className="widget-chart-content">
                      <div className="widget-numbers">
                        {this.props.data.count}
                      </div>
                      <div className="widget-subheading">
                        <h1>Qnt de Itens </h1>
                      </div>
                    </div>
                    <div className="widget-chart-wrapper chart-wrapper-relative">
                      <ResponsiveContainer height={80}>
                        <LineChart
                          data={data}
                          margin={{ top: 5, right: 5, left: 5, bottom: 0 }}
                        >
                          <Line
                            type="monotone"
                            dataKey="pv"
                            stroke="#3ac47d"
                            strokeWidth={3}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="card mb-3 widget-chart">
                    <div className="widget-chart-content">
                      <div className="widget-numbers">
                        R$ {this.props.data.mean}
                      </div>
                      <div className="widget-subheading">
                        <h1>Preço Médio</h1>
                      </div>
                    </div>
                    <div className="widget-chart-wrapper chart-wrapper-relative">
                      <ResponsiveContainer height={80}>
                        <LineChart
                          data={data2}
                          margin={{ top: 0, right: 5, left: 5, bottom: 0 }}
                        >
                          <Line
                            type="monotone"
                            dataKey="pv"
                            stroke="#d6b5ff"
                            strokeWidth={2}
                          />
                          <Line
                            type="monotone"
                            dataKey="uv"
                            stroke="#a75fff"
                            strokeWidth={2}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="card mb-3 widget-chart">
                    <div className="widget-chart-content">
                      <div className="widget-numbers">
                        R$ {this.props.data.min},00
                      </div>
                      <div className="widget-subheading">
                        <h1>Preço Mínimo </h1>
                      </div>
                    </div>
                    <div className="widget-chart-wrapper chart-wrapper-relative">
                      <ResponsiveContainer height={80}>
                        <AreaChart
                          data={data2}
                          margin={{ top: 0, right: 5, left: 5, bottom: 0 }}
                        >
                          <Area
                            type="monotoneX"
                            dataKey="uv"
                            stroke="#fd7e14"
                            fill="#ffb87d"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="card mb-3 widget-chart">
                    <div className="widget-chart-content">
                      <div className="widget-numbers">
                        {" "}
                        R$ {this.props.data.max},00
                      </div>
                      <div className="widget-subheading">
                        <h1>Preço Máximo</h1>
                      </div>
                    </div>
                    <div className="widget-chart-wrapper chart-wrapper-relative">
                      <ResponsiveContainer height={80}>
                        <BarChart
                          data={data2}
                          margin={{ top: 0, right: 5, left: 5, bottom: 0 }}
                        >
                          <Bar
                            dataKey="uv"
                            fill="#81a4ff"
                            stroke="#3f6ad8"
                            strokeWidth={2}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="12" lg="6">
                  <Card className="mb-3">
                    <CardHeader className="card-header-tab">
                      <div className="card-header-title">
                        <i className="header-icon lnr-rocket icon-gradient bg-tempting-azure">
                          {" "}
                        </i>
                        Médias de Preços
                      </div>
                      <div className="btn-actions-pane-right"></div>
                    </CardHeader>

                    <CardBody className="pt-2">
                      <Row className="mt-3">
                        <Col md="6">
                          <h2 className="tituloGrafico">Média de preços</h2>
                          <LineChart width={550} height={300} data={dataApi}>
                            <Line
                              type="monotone"
                              dataKey="mean"
                              stroke="#008080	"
                              strokeWidth={2}
                            />
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="ano" />
                            <YAxis />
                            <Tooltip />
                            <Line
                              type="monotone"
                              dataKey="mean"
                              stroke="#008080"
                            />
                          </LineChart>
                        </Col>
                      </Row>
                      <div className="divider mt-4" />
                    </CardBody>
                  </Card>
                </Col>
                <Col md="12" lg="6">
                  <Card className="mb-3">
                    <CardHeader className="card-header-tab">
                      <div className="card-header-title">
                        <i className="header-icon lnr-rocket icon-gradient bg-tempting-azure">
                          {" "}
                        </i>
                        Preços Mínimos e Máximos
                      </div>
                      <div className="btn-actions-pane-right"></div>
                    </CardHeader>

                    <CardBody className="pt-2">
                      <Row className="mt-3">
                        <Col md="6">
                          <h2 className="tituloGrafico">Preços Min/Max</h2>
                          <BarChart
                            width={600}
                            height={300}
                            data={dataApi}
                            margin={{
                              top: 5,
                              right: 30,
                              left: 20,
                              bottom: 5,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="ano" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="min" fill="#8884d8" />
                            <Bar dataKey="max" fill="#82ca9d" />
                          </BarChart>
                        </Col>
                      </Row>
                      <div className="divider mt-4" />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </ReactCSSTransitionGroup>
        </Fragment>
      </div>
    );
  }
}
