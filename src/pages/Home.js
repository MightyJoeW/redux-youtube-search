// External Dependencies
import React, { Component } from 'react'
import { API_Key } from '../config';
import YTSearch from 'youtube-api-search';

// Internal Dependencies
import VideoDetail from '../components/VideoDetail/VideoDetail';
import VideoList from '../components/VideoList/VideoList';
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';

// Local Variables
const HomeStyles = {
    display: 'grid',
    gridGap: '1em',
    gridTemplateColumns: '2fr 1fr',
    margin: '2em 3em 0 3em',
    paddingTop: 64,
}

// Component Definition
export default class componentName extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            search: null,
        };

        YTSearch({ key: API_Key, term: 'call-em-all' }, videos => {
            this.setState({
                videos
            }); // same as this.setState({videos: videos})
        });
    }

    render() {
        return (
            <div
                style={HomeStyles}>
                <VideoPlayer />
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}

