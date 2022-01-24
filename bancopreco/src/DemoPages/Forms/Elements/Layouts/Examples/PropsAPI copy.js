import React from "react";

import RetornoApi from "./RetornoAPI";
import classes from "./Movies.module.css";

const Retornoapi = ({droplets}) => {
  let cards = <h3>Loading...</h3>;
  
  return (
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
        { (droplets.length > 0) ? droplets.map( (droplet, index) => {
           return (
            <tr key={ index }>
              <td>{ droplet.grupo }</td>
              <td>{ droplet.original_dsc }</td>
              <td>{ droplet.cnpj_vencedor}</td>
              <td>{ droplet.qtde_item }</td>
              <td>{ droplet.regiao_intermediaria }</td>
              <td>{ droplet.tipo_vencedor }</td>
            </tr>
          )
         }) : <tr><td colSpan="5">Loading...</td></tr> }
      </tbody>
    </table>
  );
};

export default Retornoapi;
