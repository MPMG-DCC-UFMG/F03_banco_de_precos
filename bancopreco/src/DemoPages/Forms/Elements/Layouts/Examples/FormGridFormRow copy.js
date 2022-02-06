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
  Alert,
} from "reactstrap";

import { GrFilter } from "react-icons/gr";
// https://react-icons.github.io/react-icons/search?q=filter

import { search } from "./Utils";
import { autocomplete } from "./Utils";

import PropsAPI from "./TabelaPropsAPI";
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

  get renderDadosApi() {
    let dadosApi = <h1>{""}</h1>;

    if (this.state.dadosApi) {
      dadosApi = (
        <PropsAPI
          dadosTabela={this.state.dadosApi}
          agrupamento={this.state.agrupamento}
        />
      );
    }

    return dadosApi;
  }
  onSuggestHandler = async (e) => {
    this.setState({ buscar: e });
    this.setState({ dadosApiDes: "" });
  };

  // funções da busca avançada (filtro) modal
  onFormSubmitFilter = async (e) => {
    this.toggleT();
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

    //return <Alert color="info">No flights listed</Alert>;
  }
  toggleT() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  handleOptionChangeRadio = async (e) => {
    this.setState({
      radioPeriodo: e.target.value,
    });
    alert(e.target.value);
  };

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
                    <div
                      key={i}
                      className="sugestoes"
                      onClick={(e) => this.onSuggestHandler(dadosApiDes.desc)}
                    >
                      {dadosApiDes.desc}
                    </div>
                  ))}
              </div>
              <div className="elementosCheck">
                <Form>
                  <FormGroup check inline>
                    <Input
                      type="radio"
                      name="radio1"
                      defaultChecked
                      checked={true === this.state.radioPeriodo}
                      onChange={(e) => {
                        this.setState({ radioPeriodo: true });
                      }}
                    />
                    <Label check>Exercício</Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Input
                      type="radio"
                      name="radio1"
                      checked={false === this.state.radioPeriodo}
                      onChange={(e) => {
                        this.setState({ radioPeriodo: false });
                      }}
                    />
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
                        <Form>
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
                                        <Label>Quantidade Comprada</Label>
                                        <Input
                                          type="number"
                                          placeholder="min"
                                          min="0"
                                          name="qntMin"
                                          value={this.state.qntMin}
                                          onChange={(e) => {
                                            this.setState({
                                              qntMin: e.target.value,
                                            });
                                          }}
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
                                          value={this.state.qntMax}
                                          onChange={(e) => {
                                            this.setState({
                                              qntMax: e.target.value,
                                            });
                                          }}
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
                                            value={this.state.precoMin}
                                            onChange={(e) => {
                                              this.setState({
                                                precoMin: e.target.value,
                                              });
                                            }}
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
                                            value={this.state.precoMax}
                                            onChange={(e) => {
                                              this.setState({
                                                precoMax: e.target.value,
                                              });
                                            }}
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
                                        <Input
                                          type="text"
                                          placeholder="Nome"
                                          name="nomeOrgao"
                                          value={this.state.nomeOrgao}
                                          onChange={(e) => {
                                            this.setState({
                                              nomeOrgao: e.target.value,
                                            });
                                          }}
                                        />
                                      </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                      <FormGroup>
                                        <Label></Label>

                                        <Input
                                          type="text"
                                          placeholder="Tipo"
                                          name="tipoOrgao"
                                          value={this.state.tipoOrgao}
                                          onChange={(e) => {
                                            this.setState({
                                              tipoOrgao: e.target.value,
                                            });
                                          }}
                                        />
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
                                          type="text"
                                          name="nomeFornecedor"
                                          placeholder="Nome"
                                          value={this.state.nomeFornecedor}
                                          onChange={(e) => {
                                            this.setState({
                                              nomeFornecedor: e.target.value,
                                            });
                                          }}
                                        />
                                      </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                      <FormGroup>
                                        <Label></Label>
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
                                        <Label></Label>
                                        <Input
                                          type="text"
                                          placeholder="Tipo"
                                          name="tipoFornecedor"
                                          value={this.state.tipoFornecedor}
                                          onChange={(e) => {
                                            this.setState({
                                              tipoFornecedor: e.target.value,
                                            });
                                          }}
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
                                        <Label></Label>
                                        <Input
                                          type="text"
                                          placeholder="Modalidade"
                                          name="modalidadeLicitacao"
                                          value={this.state.modalidadeLicitacao}
                                          onChange={(e) => {
                                            this.setState({
                                              modalidadeLicitacao:
                                                e.target.value,
                                            });
                                          }}
                                        />
                                      </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                      <FormGroup>
                                        <Label></Label>
                                        <Input
                                          type="text"
                                          name="tipoLicitacao"
                                          placeholder="Tipo"
                                          value={this.state.tipoLicitacao}
                                          onChange={(e) => {
                                            this.setState({
                                              tipoLicitacao: e.target.value,
                                            });
                                          }}
                                        />
                                      </FormGroup>
                                    </Col>
                                    <Col md={2}>
                                      <FormGroup>
                                        <Label></Label>
                                        <Input
                                          type="text"
                                          id="naturezaObjeto"
                                          placeholder="Natureza do Objeto"
                                          value={this.state.naturezaObjeto}
                                          onChange={(e) => {
                                            this.setState({
                                              naturezaObjeto: e.target.value,
                                            });
                                          }}
                                        />
                                      </FormGroup>
                                    </Col>
                                  </Row>
                                </Form>

                                <CardTitle>Agrupamento</CardTitle>
                                <Form>
                                  <FormGroup check inline>
                                    <Label check>
                                      <Input
                                        type="checkbox"
                                        id="chkDescricao"
                                        checked={this.state.chkDescricao}
                                        onChange={(e) => {
                                          this.setState({
                                            chkDescricao: e.target.checked,
                                          });
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
                                        checked={this.state.chkUniMedida}
                                        onChange={(e) => {
                                          this.setState({
                                            chkUniMedida: e.target.checked,
                                          });
                                        }}
                                      />{" "}
                                      Unidade de Medida
                                    </Label>
                                  </FormGroup>
                                  <FormGroup check inline>
                                    <Label check>
                                      <Input
                                        type="checkbox"
                                        id="chkAno"
                                        checked={this.state.chkAno}
                                        onChange={(e) => {
                                          this.setState({
                                            chkAno: e.target.checked,
                                          });
                                        }}
                                      />{" "}
                                      Ano
                                    </Label>
                                  </FormGroup>
                                  <FormGroup check inline>
                                    <Label check>
                                      <Input
                                        type="checkbox"
                                        id="chkGrupo"
                                        checked={this.state.chkGrupo}
                                        onChange={(e) => {
                                          this.setState({
                                            chkGrupo: e.target.checked,
                                          });
                                        }}
                                      />{" "}
                                      Grupo do Item
                                    </Label>
                                  </FormGroup>
                                </Form>
                              </CardBody>
                            </Card>
                          </ModalBody>
                          <ModalFooter>
                            <Button
                              color="primary"
                              onClick={this.onFormSubmitFilter}
                            >
                              Buscar
                            </Button>
                            {"  "}
                            <Button color="secondary" onClick={this.toggleT}>
                              Cancelar
                            </Button>
                          </ModalFooter>
                        </Form>
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
        {
          //para desenhar a tabela
        }
        <div>{this.renderDadosApi}</div>
      </div>
    );
  }
}
