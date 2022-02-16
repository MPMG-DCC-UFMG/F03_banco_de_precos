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
    alert(e);
    setBuscar(e);
  };

  // funções da busca avançada (filtro) modal
  const onFormSubmitFilter = async (e) => {
    this.toggleT();
    const stringBusca =
      "QntMin:" +
      this.state.qntMin +
      "QntMax" +
      this.state.qntMax +
      "PrMIn" +
      this.state.precoMin +
      "precMax" +
      this.state.precoMax;
    // alert(stringBusca);

    this.search(this.state.buscar);
  };

  function toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  function toggleT() {
    this.setState({
      modal: !this.state.modal,
    });
  }

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
              {state.dadosApiDes &&
                state.dadosApiDes.map((dadosApiDes, i) => (
                  <div>{console.log(state.dadosApiDes)}</div>
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
                </FormGroup>
                <FormGroup check inline>
                  <Meses></Meses>
                </FormGroup>
                <FormGroup check inline>
                  <Cidades></Cidades>
                </FormGroup>

                <FormGroup check inline>
                  <div>
                    <Button color="gray" onClick={toggleT}>
                      <h4>
                        {" "}
                        <GrFilter /> Filtro{" "}
                      </h4>
                    </Button>
                  </div>
                </FormGroup>
              </Form>
            </div>
          </div>
        </Fragment>
        <DatePickerInput name="dateIni" label="Data Inicial" />
        <DatePickerInput name="dateFim" label="Data Final" />
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
