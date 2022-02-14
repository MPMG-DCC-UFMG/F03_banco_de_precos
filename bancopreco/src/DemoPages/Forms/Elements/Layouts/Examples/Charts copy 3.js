import React from "react";
import axios from "axios";

import {
  Line,
  LineChart,
  YAxis,
  Legend,
  Tooltip,
  CartesianGrid,
  XAxis,
} from "recharts";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://127.0.0.1:8000/api/items/match/?limit=10&offset=0&order=desc&year=2016&description=GAS%20GLP,%20ACONDICIONADO%20EM%20BOTIJAO%20RETORNAVEL%20DE%2013%20KG&unit_measure=unidade&group=gas_7`
      )
      .then((res) => {
        const keys = Object.keys(res.data);

        console.log(keys[1]);

        const data = Object.entries(res.data[keys[1]]).map(([key, values]) => ({
          category: key,
          value: parseFloat(values["5. volume"]),
        }));
        this.setState({ list: data });
        console.log(data);
      });
  }

  render() {
    const object = { name: "yes", data: this.state.list };

    return (
      <LineChart width={500} height={300}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" type="category" />
        <YAxis dataKey="value" domain={["dataMin - 2", "dataMax"]} />
        <Tooltip />
        <Legend />

        <Line
          dataKey="value"
          data={object.data}
          name={object.name}
          key={object.name}
          dot={false}
        />
      </LineChart>
    );
  }
}

export default App;
