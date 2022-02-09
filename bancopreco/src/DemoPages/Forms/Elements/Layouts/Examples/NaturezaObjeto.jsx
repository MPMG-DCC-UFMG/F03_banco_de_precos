import React from "react";
import "./FormGridFormRow.css";
const options = [
  {
    label: "Natureza Objeto",
    value: "default",
  },
  {
    label: "ALIENACAO DE BENS",
    value: "ALIENACAO DE BENS",
  },
  {
    label: "COMPRAS E OUTROS SERVICOS",
    value: "COMPRAS E OUTROS SERVICOS",
  },
  {
    label: "COMPRAS PARA OBRAS E/OU SERVICOS DE ENGENHARIA",
    value: "COMPRAS PARA OBRAS E/OU SERVICOS DE ENGENHARIA",
  },
  {
    label: "CONCESSAO",
    value: "CONCESSAO",
  },
  {
    label: "LOCACAO DE IMOVEIS",
    value: "LOCACAO DE IMOVEIS",
  },
  {
    label: "OBRAS E SERVICOS DE ENGENHARIA",
    value: "OBRAS E SERVICOS DE ENGENHARIA",
  },
  {
    label: "PERMISSAO",
    value: "PERMISSAO",
  },
];

class App extends React.Component {
  render() {
    return (
      <div>
        <select className="tipoorgao">
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default App;
