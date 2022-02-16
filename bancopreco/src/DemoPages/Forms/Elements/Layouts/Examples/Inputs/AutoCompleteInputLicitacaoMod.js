import React, { useEffect, useRef, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useField } from "@unform/core";
import PropTypes from "prop-types";
import "react-datepicker/dist/react-datepicker.css";

import ReactDOM from "react-dom";
import AutoSuggest from "react-autosuggest";

const companies = [
  { id: 1, name: "CONCORRENCIA" },
  { id: 2, name: "CONCURSO" },
  { id: 3, name: "CONVITE" },
  { id: 4, name: "LEILAO" },
  { id: 5, name: "PREGAO ELETRONICO" },
  { id: 6, name: "PREGAO PRESENCIAL" },
  { id: 7, name: "TOMADA DE PRECOS" },
];

const lowerCasedCompanies = companies.map((company) => {
  return {
    id: company.id,
    name: company.name.toUpperCase(),
  };
});

export default function DatePickerInput({ name, label, ...rest }) {
  const datepickerRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const [date, setDate] = useState(defaultValue || null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      clearValue: (ref) => {
        ref.clear();
      },
      setValue: (e, v) => {
        setDate(new Date(v));
      },
      getValue: () => {
        return datepickerRef.current.props.selected;
      },
    });
  }, [fieldName, registerField]);

  useEffect(() => {
    console.log("---- called ------", defaultValue);
    // console.log(datepickerRef.current);
  }, [defaultValue]);

  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  function getSuggestions(value) {
    return lowerCasedCompanies.filter((company) =>
      company.name.includes(value.trim().toUpperCase())
    );
  }

  return (
    <div>
      {/*  <strong>{label}</strong>
      <ReactDatePicker
        ref={datepickerRef}
        selected={date}
        onChange={setDate}
        dateFormat="dd/MM/yyyy"
        placeholderText="dd/mm/aaaa"
        isClearable
        showMonthDropdown
        showYearDropdown
        writable="true"
        {...rest}
      />
      {error} */}

      <AutoSuggest
        ref={datepickerRef}
        {...rest}
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
        selected={value}
        onChange={value}
        highlightFirstSuggestion={true}
      />
    </div>
  );
}

DatePickerInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

DatePickerInput.defaultProps = {
  label: "",
};
