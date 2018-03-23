// External Dependencies
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import { MuiThemeProvider as NewMuiThemeProvider, createMuiTheme } from 'material-ui-next/styles';
import { MuiThemeProvider } from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton'; // v0.x
import Button from 'material-ui-next/Button'; // v1.x

// Internal Dependencies
import { API_Key } from './config';
import Searchbar from './components/Searchbar/Searchbar';
import VideoDetail from './components/VideoDetail/VideoDetail';
import VideoList from './components/VideoList/VideoList';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';

const themeV1 = createMuiTheme({
  /* theme for v1 */
});
const themeV0 = getMuiTheme({
  /* theme v0.x */
});

// Component Definition
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      search: null,
    };

    YTSearch({ key: API_Key, term: 'nba' }, videos => {
      this.setState({
        videos
      }); // same as this.setState({videos: videos})
    });

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      search: e.target.value
    })
    console.log(e.target.value);
  }

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
            <Searchbar change={this.handleChange} onChange={this.handleChange}/>
          <VideoPlayer />
          <VideoList videos={this.state.videos} />
        </div>
        </MuiThemeProvider>
      </NewMuiThemeProvider>
    );
  }
}

