import React, { Component } from "react";
import * as youtube from "./apis/youtube";
import "./App.css";

import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";

class App extends Component {
  state = {
    videos: [],
    clickedVideo: "",
  };

  componentDidMount() {
    this.handleSubmit("love");
  }

  handleSubmit = async (inputValue) => {
    const response = await youtube.default.get("/search", {
      params: {
        q: inputValue,
        part: "snippet",
        maxResults: 10,
        type: "video",
        key: process.env.REACT_APP_APIkey,
      },
    });

    this.setState({
      videos: response.data.items,
      clickedVideo: response.data.items[0],
    });
  };

  handleClick = (clickedVideo) => {
    console.log("clickedVideo w app", clickedVideo);
    this.setState({
      clickedVideo: clickedVideo,
    });
  };

  render() {
    const { videos, clickedVideo } = this.state;

    return (
      <div className="ui container ">
        <SearchBar handleOnSubmit={this.handleSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              {clickedVideo && <VideoDetail clickedVideo={clickedVideo} />}
            </div>
            <div className="five wide column">
              <VideoList videos={videos} handleClick={this.handleClick} />
            </div>
          </div>
        </div>
        Founded {videos.length} videos.
      </div>
    );
  }
}

export default App;
