// External Dependencies
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import { MuiThemeProvider as NewMuiThemeProvider, createMuiTheme } from 'material-ui-next/styles';
import { MuiThemeProvider } from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Internal Dependencies
import { API_Key } from './config';
import SearchBar from './components/SearchBar/SearchBar';
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
    };

    YTSearch({ key: API_Key, term: 'nba' }, videos => {
      this.setState({
        videos
      }); // same as this.setState({videos: videos})
    });
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
            <SearchBar />
            <VideoPlayer />
            <VideoList videos={this.state.videos} />
          </div>
        </MuiThemeProvider>
      </NewMuiThemeProvider>
    );
  }
}

