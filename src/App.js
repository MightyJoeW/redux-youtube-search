// External Dependencies
import React, { Component } from 'react';
import CssBaseline from 'material-ui/CssBaseline';

// Internal Dependencies
import SimpleAppBar from "./components/SimpleAppBar/SimpleAppBar"
import router from "./router";

// Local Variables

// Component Definition
export default class App extends Component {

  render() {
    return (
      <div>
        <CssBaseline />
        <SimpleAppBar />
        {router}
      </div>
    );
  }
}

