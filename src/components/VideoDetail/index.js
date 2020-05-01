import React, { Component } from "react";

export default class VideoDetail extends Component {
  render() {
    const { clickedVideo } = this.props;
    console.log("clickedVideo", clickedVideo);
    return (
      <div>
        <div className="ui embed">
          <iframe
            src={`https://youtube.com/embed/${clickedVideo.id.videoId}`}
          />
        </div>
        <div className="ui segment">
          <h4 className="ui header">{clickedVideo.snippet.title}</h4>
          <p>{clickedVideo.snippet.description}</p>
        </div>
      </div>
    );
  }
}
