import React from "react";
import "./FormGridFormRow.css";
const options = [
  {
    label: "Tipo Licitação",
    value: "default",
  },
  {
    label: "MAIOR LANCE OU OFERTA",
    value: "MAIOR LANCE OU OFERTA",
  },
  {
    label: "MELHOR TECNICA",
    value: "MELHOR TECNICA",
  },
  {
    label: "MENOR PRECO",
    value: "MENOR PRECO",
  },
  {
    label: "TECNICA E PRECO",
    value: "TECNICA E PRECO",
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
