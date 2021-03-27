import React from "react";
import "./VideoCard.css";
import Avatar from "@material-ui/core/Avatar";

function VideoCard({ title, image, channel, channelImage, views, timestamp }) {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} />
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          alt={channel}
          src={channelImage}
        />
        <div className="video__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;