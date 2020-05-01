import React, { Component } from "react";
import VideoItem from "../VideoItem";

export default class VideoList extends Component {
  render() {
    const { videos, handleClick } = this.props;
    return (
      <div className="ui relaxed divided list">
        {videos.map((video) => {
          return (
            <VideoItem
              video={video}
              key={video.id.videoId}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    );
  }
}
