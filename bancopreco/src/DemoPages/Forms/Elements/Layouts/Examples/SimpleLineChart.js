import React, { Component, Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import classnames from "classnames";

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

export default class AnalyticsDashboard1 extends Component {
  constructor() {
    super();

    this.state = {
      dropdownOpen: false,
      activeTab1: "11",
    };
    this.toggle = this.toggle.bind(this);
    this.toggle1 = this.toggle1.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  toggle1(tab) {
    if (this.state.activeTab1 !== tab) {
      this.setState({
        activeTab1: tab,
      });
    }
  }

  render() {
    return (
      <div>
        <AppHeader />

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
                subheading="PAINEL DE DETALHAMENTO"
                icon="pe-7s-graph1"
              />
              <Row>
                <Col md="4">
                  <div className="card mb-3 widget-chart">
                    <div className="widget-chart-content">
                      <div className="widget-numbers">4517.82</div>
                      <div className="widget-subheading">
                        <h1>Quantidade de Itens </h1>
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
                      <div className="widget-numbers">4517.82</div>
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
                      <div className="widget-numbers">4517.82</div>
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
                      <div className="widget-numbers">4517.82</div>
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
                        Médias de Preços & Quantidade de Itens
                      </div>
                      <div className="btn-actions-pane-right"></div>
                    </CardHeader>

                    <CardBody className="pt-2">
                      <Row className="mt-3">
                        <Col md="6">
                          <h2 className="tituloGrafico">Média de preços</h2>

                          <BarChart
                            width={650}
                            height={300}
                            data={dataApi}
                            margin={{
                              top: 5,
                              right: 30,
                              left: 20,
                              bottom: 5,
                            }}
                            barSize={20}
                          >
                            <XAxis
                              dataKey="original"
                              scale="point"
                              padding={{ left: 10, right: 10 }}
                            />
                            <YAxis />
                            <Tooltip />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Bar
                              dataKey="mean"
                              fill="#FF8C00"
                              background={{ fill: "#eee" }}
                            />
                          </BarChart>
                        </Col>
                        <Col md="6">
                          <h2 className="tituloGrafico">Quantidade de Itens</h2>

                          <BarChart
                            width={650}
                            height={300}
                            data={dataApi}
                            margin={{
                              top: 5,
                              right: 30,
                              left: 20,
                              bottom: 5,
                            }}
                            barSize={20}
                          >
                            <XAxis
                              dataKey="original"
                              scale="point"
                              padding={{ left: 10, right: 10 }}
                            />
                            <YAxis />
                            <Tooltip />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Bar
                              dataKey="count"
                              fill="#0000cc"
                              background={{ fill: "#eee" }}
                            />
                          </BarChart>
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
                        Gráfico 2 - Preços Mínimos e Máximos
                      </div>
                      <div className="btn-actions-pane-right"></div>
                    </CardHeader>
                    <TabContent activeTab={this.state.activeTab1}>
                      <TabPane tabId="11">
                        <CardBody className="pt-2">
                          <Row className="mt-3">
                            <Col md="6">
                              <h2 className="tituloGrafico">
                                Preço Minimo  & Máximo 
                              </h2>
                              <BarChart
                                width={750}
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
                                <XAxis dataKey="original" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="min" fill="#8884d8" />
                                <Bar dataKey="max" fill="#82ca9d" />
                              </BarChart>{" "}
                            </Col>
                            <Col md="6">
                              <h2 className="tituloGrafico">
                                Quantidade de Itens
                              </h2>
                            </Col>
                          </Row>
                          <div className="divider mt-4" />
                        </CardBody>
                      </TabPane>
                      <TabPane tabId="22">
                        <div className="widget-chart p-0">
                          <ResponsiveContainer height={179}>
                            <ComposedChart data={data2}>
                              <CartesianGrid stroke="#ffffff" />
                              <Area
                                type="monotone"
                                dataKey="amt"
                                fill="#f7ffd0"
                                stroke="#85a200"
                              />
                              <Bar
                                dataKey="pv"
                                barSize={16}
                                fill="var(--primary)"
                              />
                              <Line
                                type="monotone"
                                dataKey="uv"
                                strokeWidth="3"
                                stroke="var(--danger)"
                              />
                            </ComposedChart>
                          </ResponsiveContainer>
                          <div className="widget-chart-content mt-3 mb-2">
                            <div className="widget-description mt-0 text-success">
                              <FontAwesomeIcon icon={faArrowUp} />
                              <span className="pl-2 pr-2">37.2%</span>
                              <span className="text-muted opacity-8">
                                performance increase
                              </span>
                            </div>
                          </div>
                        </div>
                        <CardBody className="pt-2">
                          <Row>
                            <Col md="6">
                              <div className="widget-content">
                                <div className="widget-content-outer">
                                  <div className="widget-content-wrapper">
                                    <div className="widget-content-left mr-3">
                                      <div className="widget-numbers fsize-3 text-muted">
                                        23%
                                      </div>
                                    </div>
                                    <div className="widget-content-right">
                                      <div className="text-muted opacity-6">
                                        Deploys
                                      </div>
                                    </div>
                                  </div>
                                  <div className="widget-progress-wrapper mt-1">
                                    <Progress
                                      className="progress-bar-sm progress-bar-animated-alt"
                                      color="warning"
                                      value="23"
                                    />
                                  </div>
                                </div>
                              </div>
                            </Col>
                          </Row>
                          <div className="divider mt-4" />
                          <Row>
                            <Col md="6">
                              <div className="widget-content">
                                <div className="widget-content-outer">
                                  <div className="widget-content-wrapper">
                                    <div className="widget-content-left mr-3">
                                      <div className="widget-numbers fsize-3 text-muted">
                                        83%
                                      </div>
                                    </div>
                                    <div className="widget-content-right">
                                      <div className="text-muted opacity-6">
                                        Servers Load
                                      </div>
                                    </div>
                                  </div>
                                  <div className="widget-progress-wrapper mt-1">
                                    <Progress
                                      className="progress-bar-sm progress-bar-animated-alt"
                                      color="danger"
                                      value="83"
                                    />
                                  </div>
                                </div>
                              </div>
                            </Col>
                            <Col md="6">
                              <div className="widget-content">
                                <div className="widget-content-outer">
                                  <div className="widget-content-wrapper">
                                    <div className="widget-content-left mr-3">
                                      <div className="widget-numbers fsize-3 text-muted">
                                        48%
                                      </div>
                                    </div>
                                    <div className="widget-content-right">
                                      <div className="text-muted opacity-6">
                                        Reported Bugs
                                      </div>
                                    </div>
                                  </div>
                                  <div className="widget-progress-wrapper mt-1">
                                    <Progress
                                      className="progress-bar-sm progress-bar-animated-alt"
                                      color="alternate"
                                      value="48"
                                    />
                                  </div>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </TabPane>
                    </TabContent>
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
