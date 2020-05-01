import React, { Component } from "react";

export default class VideoItem extends Component {
  render() {
    const { video } = this.props;
    console.log(video);
    return (
      <>
        <li>
          <p>{video.snippet.title}</p>
          <img src={`${video.snippet.thumbnails.default.url}`} />
        </li>
      </>
    );
  }
}
