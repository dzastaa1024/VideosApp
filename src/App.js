import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";

class App extends Component {
  state = {
    inputValue: "",
  };

  handleSubmit = (inputValue) => {
    this.setState({
      inputValue: inputValue,
    });
  };

  render() {
    return (
      <div>
        <SearchBar handleOnSubmit={this.handleSubmit} />
        <VideoDetail />
        <VideoList />
      </div>
    );
  }
}

export default App;
