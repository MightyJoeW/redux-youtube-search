import React from "react";
import ReactDOM from "react-dom";
// import API_KEY from './config.js';

//COMPONENTS
import Searchbar from "./components/Searchbar/Searchbar";
import VideoDetail from "./components/VideoDetail/VideoDetail";
import VideoList from "./components/VideoList/VideoList";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

//Create a new component that produces some html
const App = () => {
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
      <VideoList />
    </div>
  );
};

// insert component's generated HTML into the DOM so user can see on page
ReactDOM.render(<App />, document.getElementById("root"));
