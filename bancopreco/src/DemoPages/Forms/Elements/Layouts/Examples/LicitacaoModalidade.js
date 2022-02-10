import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import AutoSuggest from "react-autosuggest";

import "./styles.css";

const companies = [
{ id:	1	,	name: "	CONCORRENCIA	" },
{ id:	2	,	name: "	CONCURSO	" },
{ id:	3	,	name: "	CONVITE	" },
{ id:	4	,	name: "	LEILAO	" },
{ id:	5	,	name: "	PREGAO ELETRONICO	" },
{ id:	6	,	name: "	PREGAO PRESENCIAL	" },
{ id:	7	,	name: "	TOMADA DE PRECOS	" },

];

const lowerCasedCompanies = companies.map((company) => {
  return {
    id: company.id,
    name: company.name.toUpperCase(),
  };
});

const LicitacaoModalidade = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  function getSuggestions(value) {
    return lowerCasedCompanies.filter((company) =>
      company.name.includes(value.trim().toUpperCase())
    );
  }
  return (
    <div>
      <AutoSuggest
        suggestions={suggestions}
        onSuggestionsClearRequested={() => setSuggestions([])}
        onSuggestionsFetchRequested={({ value }) => {
          console.log(value);
          setValue(value);
          setSuggestions(getSuggestions(value));
        }}
        onSuggestionSelected={(_, { suggestionValue }) =>
          console.log("Selected: " + suggestionValue)
        }
        getSuggestionValue={(suggestion) => suggestion.name}
        renderSuggestion={(suggestion) => <span>{suggestion.name}</span>}
        inputProps={{
          placeholder: "Modalidade",
          value: value,
          onChange: (_, { newValue, method }) => {
            setValue(newValue);
          },
        }}
        highlightFirstSuggestion={true}
      />
    </div>
  );
};

export default LicitacaoModalidade;
