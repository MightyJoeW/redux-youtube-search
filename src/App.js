import React, { Component } from "react";

// COMPONENTS
import Searchbar from "./components/Searchbar/Searchbar";
import VideoDetail from "./components/VideoDetail/VideoDetail";
import VideoList from "./components/VideoList/VideoList";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["Stuff Keyboardists Say", "Mighty Minute", "Kobe Neva Pass"]
    };
  }
  render() {
    return (
      <div
        style={{
          display: "grid",
          gridGap: "1em",
          gridTemplateColumns: "2fr 1fr",
          margin: "2em 3em 0 3em"
        }}
      >
        <Searchbar />
        <VideoPlayer />
        <VideoList list={this.state.list} />
      </div>
    );
  }
}
