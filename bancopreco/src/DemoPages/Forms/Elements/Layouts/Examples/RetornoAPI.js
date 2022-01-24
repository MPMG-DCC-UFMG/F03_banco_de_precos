import classes from "./Movie.module.css";
import { truncStr } from "./Utils";

import React, { useState, useEffect, Component } from "react";

import { forwardRef } from "react";
import MaterialTable from "material-table";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import CircularProgress from "@material-ui/core/CircularProgress";

import Clear from "@material-ui/icons/Clear";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Search from "@material-ui/icons/Search";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Box from "@material-ui/core/Box";

const RetornoTabela = ({droplets}) => {
  console.log(droplets);

  return (
    <div>

      <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Region</th>
          <th>Memory</th>
          <th>CPUs</th>
          <th>Disk Size</th>
        </tr>
      </thead>
      <tbody>
        { (droplets.length > 0) ? droplets.map( (droplets, index) => {
           return (
            <tr key={ index }>
              <td>{ droplets.item_id }</td>
              <td>{ droplets.original }</td>
              <td>{ droplets.nome_vencedor}</td>
              <td>{ droplets.qtde_item }</td>
              <td>{ droplets.preco }</td>
              <td>{ droplets.regiao_imediata }</td>
            </tr>
          )
         }) : <tr><td colSpan="5">Loading...</td></tr> }
      </tbody>
    </table>
     
    </div>
  );
};

export default RetornoTabela;
