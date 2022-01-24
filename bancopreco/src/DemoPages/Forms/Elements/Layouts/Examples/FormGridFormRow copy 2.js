import React, { Fragment } from "react";
import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import "./FormGridFormRow.css";

import { Accordion } from "./Accordion";

export default class FormGridFormRow extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="bancoPrecoPai">
          <div className="bancoPreco">
            <h1>Banco de Preços</h1>
          </div>
          <div className="campoBuscar">
            <Input placeholder="Digite uma descrição" bsSize="lg" />
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
            </Form>
          </div>
        </div>

        <div className="App m-4">
          <Accordion open={1}>
            <Accordion.Item>
              <Accordion.Header>some header 1</Accordion.Header>
              <Accordion.Body>some body 1</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item>
              <Accordion.Header>some header 3</Accordion.Header>
              <Accordion.Body>some body 3</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item>
              <Accordion.Header>some header 4</Accordion.Header>
              <Accordion.Body>some body 4</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <Card className="main-card mb-3">
          <CardBody>
            <CardTitle>Faixa</CardTitle>
            <Form>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail11">Quantidade Comprada</Label>
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
          </CardBody>
        </Card>

        <Card className="main-card mb-3">
          <CardBody>
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
          </CardBody>
        </Card>

        <Card className="main-card mb-3">
          <CardBody>
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
          </CardBody>
        </Card>
        <Card className="main-card mb-3">
          <CardBody>
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
          </CardBody>
        </Card>
      </Fragment>
    );
  }
}
