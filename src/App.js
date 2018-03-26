// External Dependencies
import React, { Component } from 'react';

// Internal Dependencies
import SimpleAppBar from "./components/SimpleAppBar/SimpleAppBar"
import router from "./router";

// Local Variables
const styles = {
  margin: '0 auto',
}

// Component Definition
export default class App extends Component {

  render() {
    return (
      <div style={styles}>
        <SimpleAppBar />
        {router}
      </div>
    );
  }
}

