import React from "react";
import InputMask from "react-input-mask";
import "./FormGridFormRow.css"


const Input = (props) => (
  <InputMask
    mask="99.999.999/9999"
    value={props.value}
    onChange={props.onChange}
    placeholder="Digite um CNPJ"
    className="maskCnpj"
  />
);

export default Input;
