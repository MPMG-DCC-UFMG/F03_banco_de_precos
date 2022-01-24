import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

// DASHBOARDS

import FormElementsLayouts from "../Forms/Elements/Layouts";

// Layout

import AppHeader from '../../Layout/AppHeader/';
import AppFooter from '../../Layout/AppFooter/';

const Dashboards = ({match}) => (
    <Fragment>
        <AppHeader/>
        <div className="app-main">

                <div className="app-main__inner">
                    <Route path='../Forms/Elements/Layouts' component={FormElementsLayouts}/>
                </div>
                <AppFooter/>
        </div>
    </Fragment>
);

export default Dashboards;