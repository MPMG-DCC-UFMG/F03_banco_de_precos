import React, { useState, useEffect, Component } from "react";
import api from "./API";

class App extends Component {
  state = {
    dadosApi: [],
  };

  async componentDidMount() {// busca na api
    const response = await api.get("descricao");
    this.setState({ dadosApi: response.data });
  }

  render() {
    const { dadosApi } = this.state;
    return (
      <div>
        {dadosApi.map((dadosApi) => (
          <li key={dadosApi.item_id}>
            <h2>{dadosApi.original}</h2>
          </li>
        ))}
      </div>
    );
  }
}

export default App;
