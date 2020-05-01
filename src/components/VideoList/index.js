import React, { Component } from "react";
import VideoItem from "../VideoItem";

export default class VideoList extends Component {
  render() {
    const { videos } = this.props;
    return (
      <div>
        <ul>
          {videos.map((video) => {
            return <VideoItem video={video} key={video.id} />;
          })}
        </ul>
      </div>
    );
  }
}
