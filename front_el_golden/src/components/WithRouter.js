import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Home } from './Home/Home';
import { ManagementDevice } from './ManagementDevice/ManagementDevice';
import { ManagementCategory } from './ManagementCategory/ManagementCategory';

export const WithRouter = () => {
    return <Router>
        <Switch>
            <Route exact path="/">
                <Redirect from="/" to={'/home'} />
            </Route>
            <Route exact path={'/home'} component={Home} />
            <Route exact path={'/management-device'} component={ManagementDevice} />
            <Route exact path={'/management-category'} component={ManagementCategory} />
        </Switch>
    </Router>
};