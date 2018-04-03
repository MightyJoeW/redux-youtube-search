// External Dependencies
import React, { Component } from 'react';
import CssBaseline from 'material-ui/CssBaseline';

// Internal Dependencies
import router from './router';

// Component Definition
export default class App extends Component {

  render() {
    return (
      <div>
        <CssBaseline />
        {router}
      </div>
    );
  }
}

