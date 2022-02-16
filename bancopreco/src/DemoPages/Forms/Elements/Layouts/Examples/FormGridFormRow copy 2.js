import React, { Fragment, useState, Component } from "react";
import Orgao from "./Orgao";
import { Form } from "@unform/web";

import Input from "./Inputs/Input.js";

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

export default class FormGridFormRow extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
    // para iniciar como falso
    this.state = {
      chkDescricao: false,
      chkUniMedida: false,
      chkAno: false,
      chkGrupo: false,
      agrupamento: false,
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.toggleT = this.toggleT.bind(this);
  }

  state = {
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

  search = async (val) => {
    this.setState({ loading: true });
    let url = "";
    if (
      this.state.chkDescricao == false &&
      this.state.chkUniMedida == false &&
      this.state.chkAno == false &&
      this.state.chkGrupo == false
    ) {
      url = `http://127.0.0.1:8000/api/items/?limit=100&offset=0&order=desc&description=${val}`;
    } else {
      this.setState({ agrupamento: true });

      url = `http://127.0.0.1:8000/api/pricing/?group_by_description=${this.state.chkDescricao}&group_by_unit_metric=${this.state.chkUniMedida}&group_by_year=${this.state.chkAno}&group_by_cluster=${this.state.chkGrupo}&limit=100&offset=0&order=desc&description=${val}`;
    }

    const results = await search(url);
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
    this.autocomplete(e.target.value);
    this.setState({ value: e.target.value });
  };

  // função para autocomplete do fornecedor
  autocompleteFornecedor = async (desc) => {
    const retFor = await search(
      `http://127.0.0.1:8000/api/filters/autocomplete/?bidder_name=${desc}`
    );
    const dadosApiFor = retFor;
    this.setState({ dadosApiFor });
    console.log(dadosApiFor);
  };

  onChangeHandlerFornecedor = async (e) => {
    this.autocompleteFornecedor(e.target.value);
    this.setState({ value: e.target.value });
  };
  onSuggestHandlerFornecedor = async (e) => {
    this.setState({ nomeFornecedor: e });
    this.setState({ dadosApiFor: "" });
  };

  get renderDadosApi() {
    let dadosApi = <h1>{""}</h1>;

    if (this.state.dadosApi) {
      dadosApi = (
        <PropsAPI
          dadosTabela={this.state.dadosApi}
          agrupamento={this.state.agrupamento}
          ano={this.state.chkAno}
          grupo={this.state.chkUniMedida}
          desc={this.state.chkDescricao}
          unidade={this.state.chkUniMedida}
        />
      );
    }

    return dadosApi;
  }

  reset = () => {
    this.setState({ precoMax: "" });
  };
  onSuggestHandler = async (e) => {
    this.setState({ buscar: e });
    this.setState({ dadosApiDes: "" });
  };

  // funções da busca avançada (filtro) modal
  onFormSubmitFilter = async (e) => {
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
    alert(stringBusca);

    this.search(this.state.buscar);
  };

  onFormHandler = async (e) => {
    this.setState({ qntMin: e.target.value });
  };

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

  handleOptionChangeRadio = async (e) => {
    alert(e);
    this.setState({ status });
  };
  handleSubmit(data) {
    console.log(data.orgao);
    alert(data.orgao)
  }

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
        <Form onSubmit={this.handleSubmit}>
          <Input name="orgao" />
          
          <button type="submit">Enviar</button>
        </Form>
      </div>
    );
  }
}
