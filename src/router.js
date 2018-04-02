// External Dependencies
import React from 'react'
import { Route, Switch } from 'react-router-dom';

//Internal Dependencies
import Articles from './pages/Articles';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Tips from './pages/Tips';
import Videos from './pages/Videos';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/videos' component={Videos} />
        <Route path='/articles' component={Articles} />
        <Route path='/tips' component={Tips} />
        <Route path='*' component={NotFound} />
    </Switch>
);