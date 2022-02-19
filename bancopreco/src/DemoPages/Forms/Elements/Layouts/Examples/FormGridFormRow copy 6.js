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

  const [text, setText] = useState("");
  const [buscar, setBuscar] = useState("");

  // Modal open state
  const [modal, setModal] = React.useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);

  const state = {
    agrupamento: null,
    dadosApi: null,
    dadosApiDes: null,
    dadosApiFor: null,
    loading: false,
    buscar: "",
    modal: false,
    qntMin: "",
    qntMax: "",
    precoMin: "",
    precoMax: "",
    nomeOrgao: "",
    tipoOrgao: "",
    nomeFornecedor: "",
    tipoFornecedor: "",
    modalidadeLicitacao: "",
    tipoLicitacao: "",
    naturezaObjeto: "",
    chkDescricao: false,
    chkUniMedida: false,
    chkAno: false,
    chkGrupo: false,
    radioExercicio: false,
    radioPeriodo: false,
    status: 0,
  };

  search.search = async (val) => {
    state.loading = true;
    let url = "";
    if (
      state.chkDescricao == false &&
      state.chkUniMedida == false &&
      state.chkAno == false &&
      state.chkGrupo == false
    ) {
      url = `http://127.0.0.1:8000/api/items/?limit=100&offset=0&order=desc&description=${val}`;
    } else {
      state.agrupamento = true;

      url = `http://127.0.0.1:8000/api/pricing/?group_by_description=${state.chkDescricao}&group_by_unit_metric=${state.chkUniMedida}&group_by_year=${state.chkAno}&group_by_cluster=${state.chkGrupo}&limit=100&offset=0&order=desc&description=${val}`;
    }

    const results = await search(url);
    const dadosApi = results;
    state.dadosApi = dadosApi;
    state.loading = false;
  };

  // função para autocomplete da descrição
  const autocomplete = async (desc) => {
    const retdesc = await search(
      `http://localhost:8000/api/items/autocomplete/?desc=${desc}`
    );

    setBuscar(retdesc);
    //console.log({buscar});
    state.dadosApiDes = retdesc;
    //console.log(state.dadosApiDes);
  };

  function onChangeHandler(e) {
    setText(e.target.value);
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

  const handleSubmit = () => {
    console.log(formRef.current.getData());
  };

  const onSuggestHandler = async (e) => {
    setText(e);
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
                value={text}
                onChange={(e) => {
                  onChangeHandler(e);
                }}
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
              <Form>
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
                      modalTransition={{ timeout: 2000 }}
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
                            <Form>
                              <Row form>
                                <Col md={6}>
                                  <FormGroup>
                                    <Label>Quantidade Comprada</Label>
                                    <Input
                                      type="number"
                                      placeholder="min"
                                      min="0"
                                      name="qntMin"
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
                                      name="qntMax"
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
                                    <Label></Label>
                                    <Orgao />
                                  </FormGroup>
                                </Col>
                                <Col md={6}>
                                  <FormGroup>
                                    <Label></Label>

                                    <TipoOrgao></TipoOrgao>
                                  </FormGroup>
                                </Col>
                              </Row>
                            </Form>

                            <CardTitle>Fornecedor</CardTitle>
                            <Form>
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
                                    <select name="tipoFornecedor">
                                      <option value="st">
                                        Tipo Fornecedor{" "}
                                      </option>

                                      <option value="j">Jurídica</option>
                                      <option value="f">Física</option>
                                    </select>
                                  </FormGroup>
                                </Col>
                              </Row>
                            </Form>
                            <CardTitle>Licitação</CardTitle>
                            <Form>
                              <Row form>
                                <Col md={6}>
                                  <FormGroup>
                                    <Label></Label>
                                    <LicitacaoModalidade />
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
                            </Form>
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
                                atributos relacionados ao objeto de forma a
                                obter estatísticas de preço, tais como média,
                                máximo e mínimo. Esse agrupamento pode levar
                                tempo extra em processamento.
                              </UncontrolledTooltip>
                            </CardTitle>
                            <Form>
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
                                  <Input type="checkbox" id="chkGrupo" /> Grupo
                                  do Item
                                </Label>
                              </FormGroup>
                            </Form>
                          </CardBody>
                        </Card>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="primary">Buscar</Button>
                        <Button color="default">Resetar</Button>
                        <Button color="secondary">Cancelar</Button>
                      </ModalFooter>
                    </Modal>
                  </div>
                </FormGroup>
              </Form>
            </div>
          </div>
        </Fragment>

        <AutoCompleteInputOrgao name="orgao" label="Orgão" />
        <AutoCompleteInputLicitacaoMod
          name="licitacaoMdalidade"
          label="Modalidade"
        />

        <br />
        <br />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}
