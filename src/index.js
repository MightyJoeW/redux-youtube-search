import React from "react";
import ReactDOM from "react-dom";
// import API_KEY from './config.js';

//COMPONENTS
import Searchbar from "./components/Searchbar/Searchbar";
import VideoDetail from "./components/Video_Detail/Video_Detail";

//Create a new component that produces some html
const App = () => {
  return (
    <div>
      <Searchbar />
      <h1>YouTube</h1>
    </div>
  );
};

// insert component's generated HTML into the DOM so user can see on page
ReactDOM.render(<App />, document.querySelector(".container"));
