import { BrowserRouter as Router, Route, Redirect,Switch } from "react-router-dom";
import React, { Suspense, lazy, Fragment } from "react";

import { ToastContainer } from "react-toastify";

import Chart from "../../DemoPages/Forms/Elements/Layouts/Examples/Charts"

const Dashboards = lazy(() => import("../../DemoPages/Dashboards"));
const Forms = lazy(() => import("../../DemoPages/Forms"));
// Johnatan
const AppMain = () => {
  return (
    <Fragment>
      {/* Forms */}

      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <h6 className="mt-5">Aguarde ....</h6>
            </div>
          </div>
        }
      >
        <Route path="/forms" component={Forms} />
      </Suspense>

      {/* Dashboards */}

      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <h6 className="mt-3">Aguarde...</h6>
            </div>
          </div>
        }
      >
        <Route path="/dashboards" component={Dashboards} />
      </Suspense>

      {/*  <Route
        exact
        path="/"
        render={() => <Redirect to="/dashboards/basic" />}
      />  */}

      <Router>
        <Switch>
          <Route exact path="/charts" component={Chart}/>
        </Switch>
      </Router>


      <ToastContainer />
    </Fragment>
  );
};

export default AppMain;
