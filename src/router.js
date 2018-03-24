// External Dependencies
import React from 'react'
import { Route, Switch } from 'react-router-dom';

//Internal Dependencies
import Home from "./pages/Home";
import Practice from "./playground/Practice"

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/practice" component={Practice} />
    </Switch>
);