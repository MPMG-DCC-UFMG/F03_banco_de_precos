import DatePickerInput from "./Inputs/DatePicker";
import AutoCompleteInputOrgao from "./Inputs/Autocomplete";
import AutoCompleteInputLicitacaoMod from "./Inputs/AutoCompleteInputLicitacaoMod";
import { Form } from "@unform/web";

import React, { Fragment, useState, Component, useRef, useEffect } from "react";
import Orgao from "./Orgao";

import {
  Col,
  Row,
  Card,
  CardBody,
  Collapse,
  CardTitle,
  Button,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalFooter,
  ModalHeader,
  ModalBody,
  Alert,
} from "reactstrap";

import { GrFilter } from "react-icons/gr";

import { search } from "./Utils";
import { UncontrolledTooltip } from "reactstrap";

import PropsAPI from "./TabelaPropsAPI";
import "./FormGridFormRow.css";
import Meses from "./SelectMeses";
import Cidades from "./SelectCidades";
import MaskCnpj from "./Mask";
import LicitacaoModalidade from "./LicitacaoModalidade";
import { ActivityIndicator } from "react-native";
import TipoOrgao from "./TipoOrgao";
import NaturezaObjeto from "./NaturezaObjeto";
import TipoLicitacao from "./TipoLicitacao";

export default function App() {
  const formRef = useRef(null);
  const { useState } = React;

  const [descricao, setDescricao] = useState("");
  const [buscar, setBuscar] = useState("");
  const [dadosApi, setDadosApi] = useState("");
  const [agrupamento, setAgrupamento] = useState("");
  const [chkAno, setChkAno] = useState("");
  const [chkUniMedida, setChkUniMedida] = useState("");
  const [chkDescricao, setChkDescricao] = useState("");

  // Modal open state
  const [modal, setModal] = React.useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);

  const [inputs, setInputs] = useState({});

  // função para pegar os campos do form
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // função para buscar os dados na api via filtragem do form
  const buscarAPI = async (val) => {
    let url = "";

    url = `http://127.0.0.1:8000/api/items/?limit=100&offset=0&order=desc&description=${val}`;

    const results = await search(url);
    setDadosApi(results);
  };

  // função para autocomplete da descrição
  const autocomplete = async (desc) => {
    const retdesc = await search(
      `http://localhost:8000/api/items/autocomplete/?desc=${desc}`
    );

    setBuscar(retdesc);
    //console.log({buscar});
    // setDadosApiDes(retdesc)
    //console.log(state.dadosApiDes);
  };

  function onChangeHandler(e) {
    setDescricao(e.target.value);
    autocomplete(e.target.value);
  }
  // função para autocomplete do fornecedor
  const autocompleteFornecedor = async (desc) => {
    const retFor = await search(
      `http://127.0.0.1:8000/api/filters/autocomplete/?bidder_name=${desc}`
    );
    const dadosApiFor = retFor;
    state.dadosApiFor = dadosApiFor;
  };

  const renderDadosApi = () => {
    return dadosApi;
  };

  //função para submissão do form
  const handleSubmit = () => {
    buscarAPI(descricao);

    //console.log(formRef.current.getData());
    //console.log("teste" + formRef.current.getData().orgao);
    //toggle();
  };

  const onSuggestHandler = async (e) => {
    setDescricao(e);
    setBuscar("");
  };

  return (
    <div className="App">
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Fragment>
          <div className="bancoPrecoPai">
            <div className="bancoPreco">
              <h1>Banco de Preços</h1>
            </div>
            <div className="campoBuscar">
              <Input
                bsSize="lg"
                placeholder="Digite uma descrição"
                value={descricao}
                onChange={(e) => {
                  onChangeHandler(e);
                }}
                name="descricao"
              />

              {buscar &&
                buscar.map((buscar, i) => (
                  <div
                    key={i}
                    className="sugestoes"
                    onClick={(e) => onSuggestHandler(buscar.desc)}
                  >
                    {buscar.desc}
                  </div>
                ))}
            </div>
            <div className="elementosCheck">
              <FormGroup check inline>
                <Input type="radio" name="radio1" defaultChecked />
                <Label check>Exercício</Label>
              </FormGroup>
              <FormGroup check inline>
                <Input type="radio" name="radio1" />
                <Label check>Período</Label>
                {""}
                <DatePickerInput
                  name="dateIni"
                  label="Data Inicial"
                  className="arredondadoData"
                />
                <DatePickerInput
                  name="dateFim"
                  label="Data Final"
                  className="arredondadoData"
                />
              </FormGroup>
              <FormGroup check inline>
                <Meses></Meses>
              </FormGroup>
              <FormGroup check inline>
                <Cidades></Cidades>
              </FormGroup>

              <FormGroup check inline>
                <div>
                  <Button color="gray" onClick={toggle}>
                    <h4>
                      {" "}
                      <GrFilter /> Filtro{" "}
                    </h4>
                  </Button>
                  <Modal
                    isOpen={modal}
                    toggle={toggle}
                    // modalTransition={{ timeout: 2000 }}
                  >
                    <ModalHeader
                      cssModule={{ "modal-title": "w-100 text-center" }}
                    >
                      <h1>Busca Avançada</h1>
                    </ModalHeader>
                    <ModalBody>
                      <Card>
                        <CardBody>
                          <CardTitle>Faixa</CardTitle>

                          <Row form>
                            <Col md={6}>
                              <FormGroup>
                                <Label>Quantidade Comprada</Label>
                                <Input
                                  type="number"
                                  placeholder="min"
                                  min="0"
                                  name="min"
                                  value={inputs.min || ""}
                                  onChange={handleChange}
                                />
                              </FormGroup>
                            </Col>
                            <Col md={6}>
                              <FormGroup>
                                <Label> .</Label>

                                <Input
                                  type="number"
                                  placeholder="max"
                                  min="0"
                                  name="max"
                                  value={inputs.max || ""}
                                  onChange={handleChange}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <FormGroup>
                            <Row form>
                              <Col md={6}>
                                <FormGroup>
                                  <Label>Preço Unitário</Label>
                                  <Input
                                    type="number"
                                    placeholder="min"
                                    min="0"
                                    name="precoMin"
                                    value={inputs.precoMin || ""}
                                    onChange={handleChange}
                                  />
                                </FormGroup>
                              </Col>
                              <Col md={6}>
                                <FormGroup>
                                  <Label>.</Label>

                                  <Input
                                    type="number"
                                    placeholder="max"
                                    min="0"
                                    name="precoMax"
                                    value={inputs.precoMax || ""}
                                    onChange={handleChange}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </FormGroup>

                          <CardTitle>Orgão</CardTitle>
                          <Row form>
                            <Col md={6}>
                              <FormGroup>
                                <Label></Label>
                                <AutoCompleteInputOrgao
                                  name="orgao"
                                  label="Orgão"
                                />
                              </FormGroup>
                            </Col>
                            <Col md={6}>
                              <FormGroup>
                                <Label></Label>

                                <TipoOrgao></TipoOrgao>
                              </FormGroup>
                            </Col>
                          </Row>

                          <CardTitle>Fornecedor</CardTitle>

                          <Row form>
                            <Col md={6}>
                              <FormGroup>
                                <Label></Label>
                                <Input
                                  className="fornecedorComp"
                                  bsSize="lg"
                                  placeholder="Fornecedor"
                                />
                              </FormGroup>
                            </Col>
                            <Col md={4}>
                              <FormGroup>
                                <Label></Label>
                                <MaskCnpj />
                              </FormGroup>
                            </Col>
                            <Col md={4}>
                              <FormGroup>
                                <Label></Label>
                                <select
                                  name="tipoFornecedor"
                                  value={inputs.tipoFornecedor || ""}
                                  onChange={handleChange}
                                >
                                  <option value="st">Tipo Fornecedor </option>

                                  <option value="j">Jurídica</option>
                                  <option value="f">Física</option>
                                </select>
                              </FormGroup>
                            </Col>
                          </Row>

                          <CardTitle>Licitação</CardTitle>

                          <Row form>
                            <Col md={6}>
                              <FormGroup>
                                <Label></Label>
                                <AutoCompleteInputLicitacaoMod
                                  name="licitacaoMdalidade"
                                  label="Modalidade"
                                />
                              </FormGroup>
                            </Col>
                            <Col md={4}>
                              <FormGroup>
                                <Label></Label>
                                <TipoLicitacao />
                              </FormGroup>
                            </Col>
                            <Col md={4}>
                              <FormGroup>
                                <Label></Label>

                                <NaturezaObjeto />
                              </FormGroup>
                            </Col>
                          </Row>

                          <hr />

                          <CardTitle>
                            Critério de Agregação de Resultados
                            <span
                              style={{ color: "black" }}
                              href="#"
                              id="UncontrolledTooltipExample"
                            >
                              {""}
                              {""} ?
                            </span>
                            <UncontrolledTooltip
                              placement="right"
                              target="UncontrolledTooltipExample"
                            >
                              Agrupar os dados de acordo com um ou mais
                              atributos relacionados ao objeto de forma a obter
                              estatísticas de preço, tais como média, máximo e
                              mínimo. Esse agrupamento pode levar tempo extra em
                              processamento.
                            </UncontrolledTooltip>
                          </CardTitle>

                          <FormGroup check inline>
                            <Label check>
                              <Input type="checkbox" id="chkDescricao" />
                              Descrição
                            </Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input type="checkbox" id="chkUniMedida" />{" "}
                              Unidade de Medida
                            </Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input type="checkbox" id="chkAno" />
                              Ano
                            </Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input type="checkbox" id="chkGrupo" /> Grupo do
                              Item
                            </Label>
                          </FormGroup>
                        </CardBody>
                      </Card>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={handleSubmit}>
                        Buscar
                      </Button>
                      <Button color="default">Resetar</Button>
                      <Button color="secondary" onClick={toggle}>
                        Cancelar
                      </Button>
                    </ModalFooter>
                  </Modal>
                </div>
              </FormGroup>
            </div>
          </div>
        </Fragment>

        <Button color="primary" className="btnBuscar" type="submit">
          Buscar
        </Button>
      </Form>

      {
        //para desenhar a tabela
      }
      <div>{renderDadosApi}</div>
    </div>
  );
}
