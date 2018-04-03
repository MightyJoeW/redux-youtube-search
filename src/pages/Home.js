// External Dependencies
import React, { Component } from 'react'
import { API_Key } from '../config';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

// Internal Dependencies
import VideoDetail from '../components/VideoDetail/VideoDetail';
import VideoList from '../components/VideoList/VideoList';
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';
import SideNav from '../components/SideNav/SideNav';

// Local Variables
const HomeStyles = {
    display: 'grid',
    gridGap: '1em',
    gridTemplateColumns: '2fr 1fr',
    margin: '2em 3em 0 3em',
    paddingTop: 64,
}

// Component Definition
export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedVideo: null,
            search: null,
            videos: []
        };
        this.onVideoSelect = this.onVideoSelect.bind(this);
        this.videoSearch('material-ui');
    }

    onVideoSelect(selectedVideo) {
        this.setState({
            selectedVideo
        })
    }

    videoSearch(term) {
        YTSearch({ key: API_Key, term: term }, videos => {
            this.setState({
                selectedVideo: videos[0],
                videos
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
        const { selectedVideo, videos } = this.state;

        return (
            <div>
                <SideNav onSearchTermChange={videoSearch}/>
                <div style={HomeStyles}>
                    <VideoPlayer video={selectedVideo} />
                    <VideoList
                        onVideoSelect={this.onVideoSelect}
                        videos={videos} />
                </div>
            </div>
        )
    }
}

