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
export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedVideo: null,
            search: null,
            videos: []
        };

        YTSearch({ key: API_Key, term: 'material-ui' }, videos => {
            this.setState({
                selectedVideo: videos[0],
                videos: videos,

            }); // same as this.setState({videos: videos})
        });
        this.onVideoSelect = this.onVideoSelect.bind(this);
    }

    onVideoSelect(selectedVideo) {
        this.setState({
            selectedVideo
        })
    }

    render() {
        const { selectedVideo, videos } = this.state;
        return (
            <div
                style={HomeStyles}>
                <VideoPlayer video={selectedVideo} />
                <VideoList
                    onVideoSelect={this.onVideoSelect}
                    videos={videos} />
            </div>
        )
    }
}

