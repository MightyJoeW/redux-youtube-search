// External Dependencies
import React, { Component } from 'react';
import { MuiThemeProvider as NewMuiThemeProvider, createMuiTheme } from 'material-ui-next/styles';
import { MuiThemeProvider } from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton'; // v0.x
import Button from 'material-ui-next/Button'; // v1.x

// Internal Dependencies
import router from "./router";

const themeV1 = createMuiTheme({
  /* theme for v1 */
});
const themeV0 = getMuiTheme({
  /* theme v0.x */
});

// Component Definition
export default class App extends Component {

  render() {
    return (
      <NewMuiThemeProvider theme={themeV1}>
        <MuiThemeProvider muiTheme={themeV0}>
        <div
          style={{
            display: 'grid',
            gridGap: '1em',
            gridTemplateColumns: '2fr 1fr',
            margin: '2em 3em 0 3em',
          }}
        >
            {router}
        </div>
        </MuiThemeProvider>
      </NewMuiThemeProvider>
    );
  }
}

