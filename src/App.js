// External Dependencies
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Internal Dependencies
import { API_Key } from './config';
import SearchBar from './components/SearchBar/SearchBar';
import VideoDetail from './components/VideoDetail/VideoDetail';
import VideoList from './components/VideoList/VideoList';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';

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
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div
          style={{
            display: 'grid',
            gridGap: '1em',
            gridTemplateColumns: '2fr 1fr',
            margin: '2em 3em 0 3em'
          }}
        >
          <SearchBar />
          <VideoPlayer />
          <VideoList videos={this.state.videos} />
        </div>
      </MuiThemeProvider>
    );
  }
}

