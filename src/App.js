import React, { Component } from "react";
import * as youtube from "./apis/youtube";
import "./App.css";

import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";

class App extends Component {
  state = {
    inputValue: "",
    videos: [],
  };

  handleSubmit = async (inputValue) => {
    this.setState({
      inputValue: inputValue,
    });

    const response = await youtube.default.get("/search", {
      params: {
        q: this.state.inputValue,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: process.env.REACT_APP_APIkey,
      },
    });

    this.setState({
      videos: response.data.items,
    });
  };

  render() {
    const { videos } = this.state;
    return (
      <div className="wrapper">
        <SearchBar handleOnSubmit={this.handleSubmit} />
        <div className="wrapper_videos">
          <VideoDetail />
          <VideoList videos={videos} />
        </div>
        Founded {videos.length} videos.
      </div>
    );
  }
}

export default App;
