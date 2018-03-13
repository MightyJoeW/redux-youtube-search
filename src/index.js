import React from "react";
import ReactDOM from "react-dom";
// import API_KEY from './config.js';

//COMPONENTS
import Searchbar from "./components/Searchbar/Searchbar";
import VideoDetail from "./components/VideoDetail/VideoDetail";

const App = () => {
  return (
    <div>
      <Searchbar />
      <VideoPlayer />
      <VideoList />
      <VideoDetail />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
