import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";
import options from "./Anos.js";
import React, { useState, useEffect } from "react";

import "./FormGridFormRow.css"

const MultiSelectAll = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    setSelectedOptions([{ label: "Todos", value: "*" }, ...options]);
  }, []);

  function getDropdownButtonLabel({ placeholderButtonLabel, value }) {
    if (value && value.some((o) => o.value === "*")) {
      return `${placeholderButtonLabel}: Todos`;
    } else {
      return `${placeholderButtonLabel}: ${value.length} selected`;
    }
  }

  function onChange(value, event) {
    if (event.action === "select-option" && event.option.value === "*") {
      this.setState(this.options);
    } else if (
      event.action === "deselect-option" &&
      event.option.value === "*"
    ) {
      this.setState([]);
    } else if (event.action === "deselect-option") {
      this.setState(value.filter((o) => o.value !== "*"));
    } else if (value.length === this.options.length - 1) {
      this.setState(this.options);
    } else {
      this.setState(value);
    }
  }

  return (
    <ReactMultiSelectCheckboxes
      options={[{ label: "Todos", value: "*" }, ...options]}
      getDropdownButtonLabel={getDropdownButtonLabel}
      value={selectedOptions}
      onChange={onChange}
      setState={setSelectedOptions}
      placeholderButtonLabel="Ano(s)"
      className="selectExercicio"
    />
  );
};

export default MultiSelectAll;
