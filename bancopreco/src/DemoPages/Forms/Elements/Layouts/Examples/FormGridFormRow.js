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
  Modal,
  ModalFooter,
  ModalHeader,
  ModalBody,
} from "reactstrap";

import { GrFilter } from "react-icons/gr";
// https://react-icons.github.io/react-icons/search?q=filter

import { search } from "./Utils";
import PropsAPI from "./PropsAPI.js";
import "./FormGridFormRow.css";
import Meses from "./SelectMeses";
import Cidades from "./SelectCidades";
import MaskCnpj from "./Mask";
import ReactSpinner from "react-bootstrap-spinner";

import { ActivityIndicator } from "react-native";

export default class FormGridFormRow extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.toggleT = this.toggleT.bind(this);
  }
  state = {
    dadosApi: null,
    dadosApiDes: null,
    loading: false,
    buscar: "",
    modal: false,
  };
  search = async (val) => {
    this.setState({ loading: true });
    const results = await search(
      `http://localhost:8000/api/items/sample/?limit=100&offset=0&order=desc&description=${val}`
    );
    const dadosApi = results;

    this.setState({ dadosApi, loading: false });
  };

  // função para autocomplete da descrição
  autocomplete = async (desc) => {
    const retdesc = await search(
      `http://localhost:8000/api/items/autocomplete/?desc=${desc}`
    );
    const dadosApiDes = retdesc;

    this.setState({ dadosApiDes });
  };

  onChangeHandler = async (e) => {
    //alert(e.target.value);
    this.autocomplete(e.target.value);
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

  onFormSubmit() {
    this.search(this.state.buscar);
  }
  toggleT() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <div>
          {/* <ReactSpinner type="border" color="primary" size="5" style={{ flex: 1 }}/> */}
          <ActivityIndicator size={80} style={{ flex: 1 }} />
        </div>
      );
    }

    return (
      <div>
        <Form onSubmit={this.onFormSubmit}>
          <Fragment>
            <div className="bancoPrecoPai">
              <div className="bancoPreco">
                <h1>Banco de Preços</h1>
              </div>
              <div className="campoBuscar">
                <Input
                  bsSize="lg"
                  placeholder="Digite uma descrição"
                  value={this.state.buscar}
                  onChange={(e) => {
                    this.setState({ buscar: e.target.value });
                    this.onChangeHandler(e);
                  }}
                />
                {this.state.dadosApiDes &&
                  this.state.dadosApiDes.map((dadosApiDes, i) => (
                    <div key={i}>{dadosApiDes.desc}</div>
                  ))}
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
                  <FormGroup check inline>
                    <Cidades></Cidades>
                  </FormGroup>

                  <FormGroup check inline>
                    <div>
                      <Button color="gray" onClick={this.toggleT}>
                        <h4>
                          {" "}
                          <GrFilter /> Filtro{" "}
                        </h4>
                      </Button>

                      <Modal
                        isOpen={this.state.modal}
                        toggle={this.toggleT}
                        className={this.props.className}
                      >
                        <ModalHeader
                          toggle={this.toggleT}
                          cssModule={{ "modal-title": "w-100 text-center" }}
                        >
                          <h1>Busca Avançada</h1>
                        </ModalHeader>
                        <ModalBody>
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
                                      <Input
                                        type="number"
                                        placeholder="min"
                                        min="0"
                                      />
                                    </FormGroup>
                                  </Col>
                                  <Col md={6}>
                                    <FormGroup>
                                      <Label for="exampleEmail11"> .</Label>

                                      <Input
                                        type="number"
                                        placeholder="max"
                                        min="0"
                                      />
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <FormGroup>
                                  <Row form>
                                    <Col md={6}>
                                      <FormGroup>
                                        <Label for="exampleEmail11">
                                          Preço Unitário
                                        </Label>
                                        <Input
                                          type="number"
                                          placeholder="min"
                                          min="0"
                                        />
                                      </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                      <FormGroup>
                                        <Label for="exampleEmail11">.</Label>

                                        <Input
                                          type="number"
                                          placeholder="max"
                                          min="0"
                                        />
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
                                      <MaskCnpj />
                                      {/* <Input
                                        type="text"
                                        name="state"
                                        id="exampleState"
                                        placeholder="CNPJ"
                                      /> */}
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
                        </ModalBody>
                        <ModalFooter>
                          <Button color="primary" onClick={this.toggleT}>
                            Buscar
                          </Button>
                          {"  "}
                          <Button color="secondary" onClick={this.toggleT}>
                            Cancelar
                          </Button>
                        </ModalFooter>
                      </Modal>
                    </div>
                  </FormGroup>
                </Form>
              </div>
            </div>
          </Fragment>
          <Button color="primary" className="btnBuscar" type="submit">
            Buscar
          </Button>
        </Form>
        <div>{this.renderDadosApi}</div>
      </div>
    );
  }
}
