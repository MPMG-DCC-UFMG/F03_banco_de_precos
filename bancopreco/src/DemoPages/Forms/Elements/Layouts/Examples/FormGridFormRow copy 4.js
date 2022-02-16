import React, { useRef, useEffect } from "react";
import DatePickerInput from "./Inputs/DatePicker";
import AutoCompleteInputOrgao from "./Inputs/Autocomplete";
import AutoCompleteInputLicitacaoMod from "./Inputs/AutoCompleteInputLicitacaoMod";
import { Form } from "@unform/web";

export default function App() {
  const formRef = useRef(null);

  const handleSubmit = () => {
    console.log(formRef.current.getData());
  };

  return (
    <div className="App">
      <Form ref={formRef} onSubmit={handleSubmit}>
        <DatePickerInput name="birthday" label="Data de Nascimento" />
        <AutoCompleteInputOrgao name="orgao" label="Orgão" />
        <AutoCompleteInputLicitacaoMod
          name="licitacaoMdalidade"
          label="Modalidade"
        />

        <br />
        <br />
        <button type="submit">Submit (Check Console)</button>
      </Form>
    </div>
  );
}
