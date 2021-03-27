import React from "react";
import "./VideoRow.css";
function VideoRow({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
}) {
  return (
    <div className="videoRow">
      <img className="videoRow__thumbnail" src={image} />
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p>
          {channel} .{" "}
          <span className="videoRow__subsNumber">
            {subs} Subscribers {views} views . {timestamp}
          </span>
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
