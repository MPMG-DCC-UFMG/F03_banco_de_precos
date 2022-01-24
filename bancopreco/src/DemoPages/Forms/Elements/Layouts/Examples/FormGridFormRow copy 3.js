import React, { Fragment, useState } from "react";
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

import "./FormGridFormRow.css";
import Meses from "./SelectMeses";
import Cidades from "./SelectCidades";
import TabelaResultado from "./TabelaResultado.jsx";

export default class FormGridFormRow extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.descricao.value);
    alert(e.target.descricao.value);
  };

  render() {
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
                  placeholder="Digite uma descrição"
                  bsSize="lg"
                  name={"descricao"}
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
                  <FormGroup check inline>
                    <Cidades></Cidades>
                  </FormGroup>
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
                            <Label for="exampleEmail11"> </Label>

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

                    <CardTitle>Orgão Instituição</CardTitle>
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

                    <CardTitle>Fornecedor/ Licitante Vencedor</CardTitle>
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
                <Button color="primary" className="btnBuscar" type="submit">
                  Buscar
                </Button>{" "}
                {/* <TabelaResultado></TabelaResultado> */}
              </div>
            </div>
          </Fragment>
        </Form>
      </div>
    );
  }
}
