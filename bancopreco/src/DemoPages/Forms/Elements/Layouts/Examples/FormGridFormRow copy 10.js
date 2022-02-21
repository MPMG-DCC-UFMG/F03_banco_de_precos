import DatePickerInput from "./Inputs/DatePicker";
import AutoCompleteInputOrgao from "./Inputs/Autocomplete";
import AutoCompleteInputLicitacaoMod from "./Inputs/AutoCompleteInputLicitacaoMod";
import { Form } from "@unform/web";
import MaskedInput from "./Mask";
import Exercicio from "./Exercicio";
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

import LicitacaoModalidade from "./LicitacaoModalidade";
import { ActivityIndicator } from "react-native";

import TipoOrgao from "./TipoOrgao";
import NaturezaObjeto from "./NaturezaObjeto";
import TipoLicitacao from "./TipoLicitacao";

export default function App() {
  const formRef = useRef(null);
  const { useState } = React;
  const [loading, setLoading] = useState(false);

  const [descricao, setDescricao] = useState("");
  const [buscar, setBuscar] = useState("");
  const [dadosApi, setDadosApi] = useState("");
  const [dadosApiFor, setDadosApiFor] = useState("");
  const [buscarFor, setBuscarFor] = useState("");

  const [agrupamento, setAgrupamento] = useState("");
  const [chkAno, setChkAno] = useState(false);
  const [chkUniMedida, setChkUniMedida] = useState(false);
  const [chkDescricao, setChkDescricao] = useState(false);
  const [chkGrupo, setChkGrupo] = useState(false);
  const [fornecedor, setFornecedor] = useState("");

  const [cidade, setCidade] = useState("");
  const [microregion, setMicroregiao] = useState("");
  const [mesoregion, setMesoregiao] = useState("");
  const [imediateRegion, setImediateRegion] = useState("");
  const [interRegion, setInterRegion] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");

  const [licitacaoModalidade, setLicitacaoModalidade] = useState("");
  const [tipolici, setTipolici] = useState("");
  const [nomeLicitante, setNomeLicitante] = useState("");
  const [tipoLicitante, setTipoLicitante] = useState("");
  const [cpfcnpj, setCpfcnpj] = useState("");
  const [minItens, setMinItens] = useState("");
  const [maxItens, setMaxItens] = useState("");
  const [minPreco, setMinPreco] = useState("");
  const [maxPreco, setMaxPreco] = useState("");
  const [naturezaItem, setNaturezaItem] = useState("");
  const [unidadeMedida, setUnidadeMedida] = useState("");

  const [periodo, setPeriodo] = useState(false);

  // Modal open state
  const [modal, setModal] = React.useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);

  const [inputs, setInputs] = useState({});
  const [valuesCNPJ, setValuesCNPJ] = useState("");

  // função para pegar os campos do form
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // função para buscar os dados na api via filtragem do form
  const buscarAPI = async (val) => {
    //, dataInicial, dataFinal) => {
    setLoading(true);
    /*  let ano=""
    let mes=""
    if (periodo == false) {
       ano = inputs.anoMesExercicio.split("-")[0];
       mes = inputs.anoMesExercicio.split("-")[1];
    }
    let datIn = dateFormat(dataInicial);
    let dataF = dateFormat(dataFinal);
    let anoI = datIn.split("/")[0];
    let exerPeriodoSele = "";

    if (periodo) {
      exerPeriodoSele = `before=${datIn}&after=${dataF}`;
    } else {
      exerPeriodoSele = `year=${ano}&month=${mes}`;
    }
    console.log(inputs.tipoLicitacao);
 */
    let url = "";
    if (
      chkDescricao == false &&
      chkUniMedida == false &&
      chkAno == false &&
      chkGrupo == false
    ) {
      url = `http://127.0.0.1:8000/api/items/?limit=100&offset=0&order=desc&description=${val}`;
      // url = `http://127.0.0.1:8000/api/pricing/?limit=100&sort=count&order=desc&${exerPeriodoSele}&description=${val}&body=${
      //   formRef.current.getData().orgao
      // }&modality=${licitacaoModalidade}&procurement_type=${
      //   inputs.tipoLicitacao
      // }&bidder_name=${fornecedor}&bidder_type=${
      //   inputs.tipoFornecedor
      // }&bidder_document=${inputs.cnpj}&min_amount=${
      //   inputs.minQntComprada
      // }&max_amount=${inputs.maxQntComprada}&min_homolog_price=${
      //   inputs.precoMin
      // }&max_homolog_price=${inputs.precoMax}&object_nature=${
      //   inputs.naturezaObjeto
      // }`;
    } else {
      // url = `http://127.0.0.1:8000/api/pricing/?group_by_description=${chkDescricao}&group_by_unit_metric=${chkUniMedida}&group_by_year=${chkAno}&group_by_cluster=${chkGrupo}&limit=100&offset=0&order=desc&description=${val}`;

      url = `http://127.0.0.1:8000/api/pricing/?group_by_description=${chkGrupo}&group_by_unit_metric=${chkUniMedida}&group_by_year=${chkAno}&group_by_cluster=${chkGrupo}&limit=100&sort=count&order=desc&${exerPeriodoSele}&description=${val}&body=${
        formRef.current.getData().orgao
      }&modality=${
        inputs.tipoLicitacao
      }&bidder_name=${fornecedor}&bidder_type=${
        inputs.tipoFornecedor
      }&bidder_document=${inputs.cnpj}&min_amount=${
        inputs.minQntComprada
      }&max_amount=${inputs.maxQntComprada}&min_homolog_price=${
        inputs.precoMin
      }&max_homolog_price=${inputs.precoMax}&object_nature=${
        inputs.naturezaObjeto
      }`;
      //setAgrupamento(true);
    }

    console.log(url);

    const results = await search(url);
    setDadosApi(results);

    console.log(url);

    setLoading(false);

    console.log(results);
    alert("loading " + loading);
  };

  const dateFormatAux = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    return `${year}/${day}/${month}`; ///[year, month, day].join("-");
  };

  const onFormSubmitFilter = () => {
    //let dataInicial = formRef.current.getData().dataInicial;
    //let dataFinal = formRef.current.getData().dataFinal;
    buscarAPI(descricao); //, dataInicial, dataFinal);

    toggle();
  };

  // função para autocomplete da descrição
  const autocomplete = async (desc) => {
    const retdesc = await search(
      `http://localhost:8000/api/items/autocomplete/?desc=${desc}`
    );

    setBuscar(retdesc);
  };
  const onChangeHandlerFornecedor = async (e) => {
    autocompleteFornecedor(e.target.value);
    setFornecedor(e.target.value);
  };

  const onSuggestHandlerFornecedor = async (e) => {
    setFornecedor(e);
    setBuscarFor("");
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
    console.log(retFor);
    setBuscarFor(retFor);
  };

  // if else
  function renderDadosApi() {
    // alert("dadosApi " + dadosApi);

    let dadosAp = <h1>{""}</h1>;

    if (dadosApi) {
      console.log("T " + dadosApi);
      dadosAp = (
        <PropsAPI
          dadosTabela={dadosApi}
          agrupamento={agrupamento}
          ano={chkAno}
          grupo={chkUniMedida}
          desc={chkDescricao}
          unidade={chkUniMedida}
        />
      );
    }
    return dadosAp;
  }

  //função para submissão do form
  const handleSubmit = () => {
    /* let dataInicial = formRef.current.getData().dataInicial;
    let dataFinal = formRef.current.getData().dataFinal; */
    buscarAPI(descricao); /* , dataInicial, dataFinal); */

    //console.log("teste" + formRef.current.getData().orgao);
    //toggle();
  };

  const onSuggestHandler = async (e) => {
    setDescricao(e);
    setBuscar("");
  };
  if (loading) {
    return (
      <div>
        <ActivityIndicator size={80} style={{ flex: 1 }} />
      </div>
    );
  }

  const [selected, setSelected] = useState("male");

  const changeHandler = (e) => {
    setSelected(e.target.value);
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
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  id="male"
                  checked={selected === "male"}
                  onChange={changeHandler}
                />

                <Label check>Exercício</Label>

                <div aria-hidden={selected !== "male" ? true : false}>
                  {/* usar o mesmo componente de mês para o ano, porque a pessoa pode selecionar mais de um ano */}
                  {""}
                  {""}
                  <Exercicio className="selectExercicio"></Exercicio>
                </div>
              </FormGroup>
              <FormGroup check inline>
                <input
                  type="radio"
                  value="female"
                  id="female"
                  checked={selected === "female"}
                  name="gender"
                  onChange={changeHandler}
                />
                <Label check>Período</Label>
                <div aria-hidden={selected !== "female" ? true : false}>
                  <FormGroup check inline>
                    <Exercicio className="selectExercicio"></Exercicio>
                  </FormGroup>
                  <FormGroup check inline>
                    <Meses />
                  </FormGroup>
                </div>
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
                                  name="minQntComprada"
                                  value={inputs.minQntComprada || ""}
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
                                  name="maxQntComprada"
                                  value={inputs.maxQntComprada || ""}
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
                                  bsSize="lg"
                                  placeholder="Fornecedor"
                                  value={fornecedor}
                                  onChange={(e) => {
                                    onChangeHandlerFornecedor(e);
                                  }}
                                  className="fornecedorComp"
                                />

                                {buscarFor &&
                                  buscarFor.map((buscarFor, i) => (
                                    <div
                                      key={i}
                                      className="fornecedorComp"
                                      onClick={(e) =>
                                        onSuggestHandlerFornecedor(
                                          buscarFor.bidder_name
                                        )
                                      }
                                    >
                                      {buscarFor.bidder_name}
                                    </div>
                                  ))}
                              </FormGroup>
                            </Col>
                            <Col md={4}>
                              <FormGroup>
                                <Label></Label>
                                CNPJ
                                <MaskedInput
                                  name="cnpj"
                                  mask="99.999.999/9999-99"
                                  placeholder="CNPJ"
                                  value={inputs.cnpj || "CNPJ"}
                                  onChange={handleChange}
                                  className="fornecedorComp"
                                />
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
                                <select
                                  name="tipoLicitacao"
                                  value={inputs.tipoLicitacao || ""}
                                  onChange={handleChange}
                                >
                                  <option value="tl">Tipo Licitacao </option>

                                  <option value="MAIOR LANCE OU OFERTA">
                                    MAIOR LANCE OU OFERTA
                                  </option>
                                  <option value="MELHOR TECNICA">
                                    MELHOR TECNICA
                                  </option>
                                  <option value="MENOR PRECO">
                                    MENOR PRECO
                                  </option>

                                  <option value="TECNICA E PRECO">
                                    TECNICA E PRECO
                                  </option>
                                </select>
                              </FormGroup>
                            </Col>
                            <Col md={4}>
                              <FormGroup>
                                <Label></Label>

                                <select
                                  name="naturezaObjeto"
                                  value={inputs.naturezaObjeto || ""}
                                  onChange={handleChange}
                                >
                                  <option value="no">Natureza Objeto </option>

                                  <option value="ALIENACAO DE BENS">
                                    ALIENACAO DE BENS
                                  </option>
                                  <option value="COMPRAS E OUTROS SERVICOS">
                                    COMPRAS E OUTROS SERVICOS
                                  </option>
                                  <option value="COMPRAS PARA OBRAS E/OU SERVICOS DE ENGENHARIA">
                                    COMPRAS PARA OBRAS E/OU SERVICOS DE
                                    ENGENHARIA
                                  </option>

                                  <option value="CONCESSAO">CONCESSAO</option>
                                  <option value="LOCACAO DE IMOVEIS">
                                    LOCACAO DE IMOVEIS
                                  </option>
                                </select>
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
                              <Input
                                type="checkbox"
                                id="chkDescricao"
                                checked={chkDescricao}
                                onChange={(e) => {
                                  setChkDescricao(e.target.checked);
                                }}
                              />
                              Descrição
                            </Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input
                                type="checkbox"
                                id="chkUniMedida"
                                checked={chkUniMedida}
                                onChange={(e) => {
                                  setChkUniMedida(e.target.checked);
                                }}
                              />
                              Unidade de Medida
                            </Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input
                                type="checkbox"
                                id="chkAno"
                                checked={chkAno}
                                onChange={(e) => {
                                  setChkAno(e.target.checked);
                                }}
                              />
                              Ano
                            </Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Label check>
                              <Input
                                type="checkbox"
                                id="chkGrupo"
                                checked={chkGrupo}
                                onChange={(e) => {
                                  setChkGrupo(e.target.checked);
                                }}
                              />{" "}
                              Grupo do Item
                            </Label>
                          </FormGroup>
                        </CardBody>
                      </Card>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={onFormSubmitFilter}>
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
      <div>{renderDadosApi()}</div>
    </div>
  );
}
