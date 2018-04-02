// External Dependencies
import React, { Component } from 'react';
import CssBaseline from 'material-ui/CssBaseline';

// Internal Dependencies
import router from './router';
import SideNav from './components/SideNav/SideNav';

// Component Definition
export default class App extends Component {

  render() {
    return (
      <div>
        <SideNav />
        <CssBaseline />
        {router}
      </div>
    );
  }
}

