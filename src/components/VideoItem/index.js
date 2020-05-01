import React, { Component } from "react";
import "./VideoItem.css";

export default class VideoItem extends Component {
  render() {
    const { video, handleClick } = this.props;

    return (
      <>
        <div
          className="video-item item"
          onClick={() => {
            handleClick(video);
          }}
        >
          <img
            className="ui image"
            src={`${video.snippet.thumbnails.default.url}`}
          />
          <div className="content">
            <div className="header">{video.snippet.title}</div>
          </div>
        </div>
      </>
    );
  }
}
