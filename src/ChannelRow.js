import React from "react";
import "./Channel.css";
import Avatar from "@material-ui/core/Avatar";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

function ChannelRow({
  image,
  channel,
  subs,
  noOfVideos,
  discription,
  verified,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" src={image} />
      <div className="channelRow__text">
        <h4>
          {channel}
          {verified && <CheckCircleOutlineIcon />}
        </h4>
        <p>
          {subs} subscribers . {noOfVideos} videos
        </p>
        <p>{discription}</p>
        
      </div>
    </div>
  );
}

export default ChannelRow;
