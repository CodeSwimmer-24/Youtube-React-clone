import React from "react";
import "./Sidebar.css";
import "./SidebarRow";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icons={HomeIcon} title="Home" />
      <SidebarRow Icons={WhatshotIcon} title="Trending" />
      <SidebarRow Icons={SubscriptionsIcon} title="Subscriptions" />
      <hr />
      <SidebarRow Icons={VideoLibraryIcon} title="Library" />
      <SidebarRow Icons={HistoryIcon} title="Hsitory" />
      <SidebarRow Icons={OndemandVideoIcon} title="Your video" />
      <SidebarRow Icons={WatchLaterIcon} title="Watch Later" />
      <SidebarRow Icons={ThumbUpAltIcon} title="Like Video" />
      <SidebarRow Icons={VideoLibraryIcon} title="Library" />
      <SidebarRow Icons={ExpandMoreIcon} title="Show More" />
    </div>
  );
}

export default Sidebar;
