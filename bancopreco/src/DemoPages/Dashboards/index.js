import React, { Fragment } from "react";

import Tabs from "react-responsive-tabs";

// Examples JOHNATAN

import FormGrid from "../Forms/Elements/Layouts/Examples/FormGrid.js";
import FormGridFormRow from "../Forms/Elements/Layouts/Examples/FormGridFormRow";
import AppHeader from "../../Layout/AppHeader/";

const tabsContent = [
  {
    title: " ",
    content: <FormGridFormRow />,
  },
  {
    title: " ",
    content: <FormGrid />,
  },
];

function getTabs() {
  return tabsContent.map((tab, index) => ({
    title: tab.title,
    getContent: () => tab.content,
    key: index,
  }));
}

class FormElementsLayouts extends React.Component {
  // JOHNATAN
  render() {
    return (
      <Fragment>
        <AppHeader />
        <div className="app-main">
             <div className="app-main__inner">
          <Tabs
            tabsWrapperClass="body-tabs body-tabs-layout"
            transform={false}
            showInkBar={false}
            items={getTabs()}
          />
        </div>
        </div>
      </Fragment>
    );
  }
}

export default FormElementsLayouts;
