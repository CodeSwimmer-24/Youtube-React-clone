import React from "react";
import "./SidebarRow.css";

function SidebarRow({ selected, Icons, title }) {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      <Icons className="sidebarRow__icon " />
      <h2 className="sidebarRow__title ">{title}</h2>
    </div>
  );
}

export default SidebarRow;
