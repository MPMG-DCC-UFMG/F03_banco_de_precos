import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// Forms

import FormElementsLayouts from "./Elements/Layouts/";

// Layout
// Aqui JOHNATAN
import AppHeader from "../../Layout/AppHeader/";

const Forms = ({ match }) => (
  <Fragment>
    <AppHeader />
    <div className="app-main">
      {/* <AppSidebar/> JOHNATAN */}

      <div className="app-main__inner">
        {/* Form Elements */}

        <Route path={`${match.url}/layouts`} component={FormElementsLayouts} />
        {console.log(match.url)}
      </div>
    </div>
  </Fragment>
);

export default Forms;
