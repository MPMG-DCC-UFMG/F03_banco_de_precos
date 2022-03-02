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
import axios from "axios";

export default class javascriptMap extends Component {
  state = {
    loading: false,
    data: [],
  };

  getData() {
    this.setState({ loading: true });

    axios
      .get(
        `http://127.0.0.1:8000/api/charts/?limit=100&offset=0&order=desc&year=${this.props.data.ano}&description=${this.props.data.original}&unit_measure=${this.props.data.dsc_unidade_medida}`
        //`http://127.0.0.1:8000/api/items/match/?limit=100&offset=0&order=desc&year=${this.props.data.ano}&description=${this.props.data.original}&unit_measure=${this.props.data.dsc_unidade_medida}&group=${this.props.data.grupo}`
      )
      .then((res) => {
        var data = res.data;
        this.setState({ data: data });
        this.setState({ loading: false });
      });
  }
  componentDidMount() {
    this.getData();
  }
  render() {
    console.log(this.state.loading);
    if (this.state.loading) {
      return (
        <div>
          <ActivityIndicator size={80} style={{ flex: 1 }} />
        </div>
      );
    }
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

    // função para converter a data de numero para texto, ou seja, recebe 1 e converte para jan
    const getXValueData2 = (data) => {
      const index = monthNames[data["mes"]];

      return index;
    };

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
                // subheading4={this.props.data.grupo}
              />
              <Row>
                <Col md="4">
                  <div className="card mb-3 widget-chart">
                    <div className="widget-chart-content">
                      <div className="widget-numbers">
                        {this.props.data.count}
                      </div>
                      <div className="widget-subheading">
                        <h1 className="titleField">Qnt de Itens </h1>
                        <div className="borda1"></div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="card mb-3 widget-chart">
                    <div className="widget-chart-content">
                      <div className="widget-numbers">
                        {this.props.data.mean.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </div>
                      <div className="widget-subheading">
                        <h1 className="titleField">Preço Médio</h1>
                        <div className="borda2"></div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="card mb-3 widget-chart">
                    <div className="widget-chart-content">
                      <div className="widget-numbers">
                        {this.props.data.min.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </div>
                      <div className="widget-subheading">
                        <h1 className="titleField">Preço Mínimo </h1>
                        <div className="borda3"></div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="card mb-3 widget-chart">
                    <div className="widget-chart-content">
                      <div className="widget-numbers">
                        {" "}
                        {this.props.data.max.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </div>
                      <div className="widget-subheading">
                        <h1 className="titleField">Preço Máximo</h1>
                        <div className="borda4"></div>
                      </div>
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
                        Relação de Itens
                      </div>
                      <div className="btn-actions-pane-right"></div>
                    </CardHeader>

                    <CardBody className="pt-2">
                      <Row className="mt-3">
                        <Col md="6">
                          {/* <h2 className="tituloGrafico">Média de preços</h2> */}
                          <div
                            style={{
                              paddingBottom: "56.25%" /* 16:9 */,
                              position: "relative",
                              height: 0,
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                top: "0",
                                left: "0",
                                width: "100%",
                                height: "100%",
                              }}
                            >
                              <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                  data={data}
                                  margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 50,
                                  }}
                                >
                                  <XAxis dataKey="data" angle={-90} dx={5} textAnchor="end" />
                                  <YAxis
                                    label={{
                                      value: "Quantidade de Itens",
                                      angle: -90,
                                      dx: -45,
                                    }}
                                  />
                                  <Tooltip />
                                  <Bar dataKey="qtde_item" fill="#82ca9d" />
                                </BarChart>
                              </ResponsiveContainer>
                            </div>
                          </div>
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
                        Relação de Preços
                      </div>
                      <div className="btn-actions-pane-right"></div>
                    </CardHeader>

                    <CardBody className="pt-2">
                      <Row className="mt-3">
                        <Col md="6">
                          {/* <h2 className="tituloGrafico">Preços </h2> */}

                          <div
                            style={{
                              paddingBottom: "56.25%" /* 16:9 */,
                              position: "relative",
                              height: 0,
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                top: "0",
                                left: "0",
                                width: "100%",
                                height: "100%",
                              }}
                            >
                              <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                  data={data}
                                  margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 50,
                                  }}
                                >
                                  {" "}
                                  <XAxis dataKey="data" angle={-90} dx={5} textAnchor="end" />
                                  <YAxis
                                    label={{
                                      value: "Preço",
                                      angle: -90,
                                      dx: -45,
                                    }}
                                  />
                                  <Tooltip />
                                  <Bar dataKey="mean_preco" fill="#ffa500" />
                                </BarChart>
                              </ResponsiveContainer>
                            </div>
                          </div>
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
