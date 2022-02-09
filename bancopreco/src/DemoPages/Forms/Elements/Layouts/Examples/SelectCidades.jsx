import React from "react";
import { render } from "react-dom";
import DropdownTreeSelect from "react-dropdown-tree-select";
import "react-dropdown-tree-select/dist/styles.css";
import data from "./Cidades.json";
import "./FormGridFormRow.css";
import CustomScroll from "react-customscroll";

const onChange = (currentNode, selectedNodes) => {
  console.log("path::", currentNode.path);
};

const assignObjectPaths = (obj, stack) => {
  Object.keys(obj).forEach((k) => {
    const node = obj[k];
    if (typeof node === "object") {
      node.path = stack ? `${stack}.${k}` : k;
      assignObjectPaths(node, node.path);
    }
  });
};

const App = () => {
  assignObjectPaths(data);

  return (
    <DropdownTreeSelect
      data={data}
      texts={{ placeholder: "Minas Gerais" }}
      onChange={onChange}
      className="bootstrap-demo"
    />
  );
};
export default App;
