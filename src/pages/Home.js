// External Dependencies
import React, { Component } from 'react'
import { API_Key } from '../config';
import YTSearch from 'youtube-api-search';

// Internal Dependencies
import Searchbar from '../components/Searchbar/Searchbar';
import VideoDetail from '../components/VideoDetail/VideoDetail';
import VideoList from '../components/VideoList/VideoList';
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';

export default class componentName extends Component {
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
      <div>
            <Searchbar change={this.handleChange} onChange={this.handleChange} />
            <VideoPlayer />
            <VideoList videos={this.state.videos} />
      </div>
    )
  }
}
