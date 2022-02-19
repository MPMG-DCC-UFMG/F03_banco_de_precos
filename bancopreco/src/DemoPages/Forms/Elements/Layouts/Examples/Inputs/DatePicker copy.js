import React, { useEffect, useRef, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useField } from "@unform/core";
import PropTypes from "prop-types";
import "react-datepicker/dist/react-datepicker.css";
import ptBR from "date-fns/locale/pt-BR";

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

  return (
    <div>
      {/* <strong>{label}</strong> */}
      {/* <input type="text" {...rest} /> */}
      <ReactDatePicker
        locale={ptBR}
        ref={datepickerRef}
        selected={date}
        onChange={setDate}
        dateFormat="dd/MM/yyyy"
        placeholderText={label}
        isClearable
        showMonthDropdown
        showYearDropdown
        writable="true"
        {...rest}
      />
      {error}
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
