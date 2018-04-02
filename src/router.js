// External Dependencies
import React from 'react'
import { Route, Switch } from 'react-router-dom';

//Internal Dependencies
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import Tips from "./pages/Tips";
import Videos from "./pages/Videos";

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/videos" component={Videos} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/tips" component={Tips} />
    </Switch>
);