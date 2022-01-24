import React, { Fragment, useState, Component } from "react";
import {
  Col,
  Row,
  Card,
  CardBody,
  Collapse,
  CardTitle,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import { search } from "./Utils";
import PropsAPI from "./PropsAPI.js";
import "./FormGridFormRow.css";
import Meses from "./SelectMeses";

import ReactSpinner from "react-bootstrap-spinner";

import {ActivityIndicator} from 'react-native';


export default class FormGridFormRow extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  state = {
    dadosApi: null,
    loading: false,
    value: "",
  };
  search = async (val) => {
    this.setState({ loading: true });
    const results = await search(
      `http://127.0.0.1:8000/api/items/?limit=10&offset=0&order=desc&description=${val}`
    );
    const dadosApi = results;

    this.setState({ dadosApi, loading: false });
  };

  onChangeHandler = async (e) => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
  };

  get renderDadosApi() {
    let dadosApi = <h1>{""}</h1>;

    if (this.state.dadosApi) {
      dadosApi = <PropsAPI droplets={this.state.dadosApi} />;
    }

    return dadosApi;
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  render() {
    if (this.state.loading) {
      return (
        <div>
          {/* <ReactSpinner type="border" color="primary" size="5" style={{ flex: 1 }}/> */}
              <ActivityIndicator size={80} style={{ flex: 1 }}/>

        </div>
      );
    }

    return (
      <div>
        <Form>
          <Fragment>
            <div className="bancoPrecoPai">
              <div className="bancoPreco">
                <h1>Banco de Preços</h1>
              </div>

              <div className="campoBuscar">
                <Input
                  bsSize="lg"
                  value={this.state.value}
                  onChange={(e) => this.onChangeHandler(e)}
                  placeholder="Digite uma descrição"
                />
              </div>
              <div className="elementosCheck">
                <Form>
                  <FormGroup check inline>
                    <Input type="radio" />
                    <Label check>Exercício</Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Input type="radio" />
                    <Label check>Período</Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Meses></Meses>
                  </FormGroup>
                  <FormGroup check inline></FormGroup>
                </Form>
              </div>
            </div>

            <div>
              <Button
                color="success"
                onClick={this.toggle}
                style={{ marginBottom: "1rem" }}
                className="acordion"
              >
                Busca Avançada
              </Button>
              <Collapse isOpen={this.state.collapse}>
                <Card>
                  <CardBody>
                    <CardTitle>Faixa</CardTitle>
                    <Form>
                      <Row form>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="exampleEmail11">
                              Quantidade Comprada
                            </Label>
                            <Input type="number" placeholder="min" min="0" />
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="exampleEmail11"> .</Label>

                            <Input type="number" placeholder="max" min="0" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <FormGroup>
                        <Row form>
                          <Col md={6}>
                            <FormGroup>
                              <Label for="exampleEmail11">Preço Unitário</Label>
                              <Input type="number" placeholder="min" min="0" />
                            </FormGroup>
                          </Col>
                          <Col md={6}>
                            <FormGroup>
                              <Label for="exampleEmail11">.</Label>

                              <Input type="number" placeholder="max" min="0" />
                            </FormGroup>
                          </Col>
                        </Row>
                      </FormGroup>
                    </Form>

                    <CardTitle>Orgão</CardTitle>
                    <Form>
                      <Row form>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="exampleEmail11"></Label>
                            <Input type="text" placeholder="Nome" />
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="exampleEmail11"></Label>

                            <Input type="text" placeholder="Tipo" />
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>

                    <CardTitle>Fornecedor</CardTitle>
                    <Form>
                      <Row form>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="exampleCity"></Label>
                            <Input
                              type="text"
                              name="city"
                              id="exampleCity"
                              placeholder="Nome"
                            />
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="exampleState"></Label>
                            <Input
                              type="text"
                              name="state"
                              id="exampleState"
                              placeholder="CNPJ"
                            />
                          </FormGroup>
                        </Col>
                        <Col md={2}>
                          <FormGroup>
                            <Label for="exampleZip"></Label>
                            <Input
                              type="text"
                              name="zip"
                              id="exampleZip"
                              placeholder="Tipo"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                    <CardTitle>Licitação</CardTitle>
                    <Form>
                      <Row form>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="exampleCity"></Label>
                            <Input
                              type="text"
                              name="city"
                              id="exampleCity"
                              placeholder="Modalidade"
                            />
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="exampleState"></Label>
                            <Input
                              type="text"
                              name="state"
                              id="exampleState"
                              placeholder="Tipo"
                            />
                          </FormGroup>
                        </Col>
                        <Col md={2}>
                          <FormGroup>
                            <Label for="exampleZip"></Label>
                            <Input
                              type="text"
                              name="zip"
                              id="exampleZip"
                              placeholder="Natureza do Objeto"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>

                    <CardTitle>Agrupamento</CardTitle>
                    <Form>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" /> Descrição
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" /> Unidade de Medida
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" /> Ano
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" /> Grupo do Item
                        </Label>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </Collapse>
              <div>
                {this.renderDadosApi}
                <Button color="primary" className="btnBuscar" type="submit">
                  Buscar
                </Button>{" "}
              </div>
            </div>
          </Fragment>
        </Form>
      </div>
    );
  }
}
