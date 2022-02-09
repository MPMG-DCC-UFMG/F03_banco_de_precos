import React from "react";
import "./FormGridFormRow.css";
const options = [

  {
    label: "Tipo Orgao",
    value: "tiporgao",
  },
  {
    label: "AUTARQUIA (EXCETO RPPS)",
    value: "AUTARQUIA (EXCETO RPPS)",
  },
  {
    label: "CAMARA MUNICIPAL",
    value: "CAMARA MUNICIPAL",
  },
  {
    label: "EMPRESA PUBLICA (APENAS AS DEPENDENTES)",
    value: "EMPRESA PUBLICA (APENAS AS DEPENDENTES)",
  },
  {
    label: "FUNDACAO",
    value: "FUNDACAO",
  },
  {
    label: "PREFEITURA MUNICIPAL",
    value: "PREFEITURA MUNICIPAL",
  },
  {
    label: "RPPS (REGIME PROPRIO DE PREVIDENCIA SOCIAL)",
    value: "RPPS (REGIME PROPRIO DE PREVIDENCIA SOCIAL)",
  },
  {
    label: "SOCIEDADE DE ECONOMIA MISTA (APENAS AS DEPENDENTES)",
    value: "SOCIEDADE DE ECONOMIA MISTA (APENAS AS DEPENDENTES)",
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
