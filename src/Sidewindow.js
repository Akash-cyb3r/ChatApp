import React from "react";
import "./Sidewindow.css";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import "./Sidewindow.css";
import SidewindowChat from "./SidewindowChat";

function Sidewindow() {
  return (
    <div className="sidewindow">
      <div className="sidewindow_header">
        <Avatar />
        <div className="sidewindow_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidewindow_search">
        <div className="sidewindow__searchContainer">
          <input placeholder="search or add chat" type="text" />
        </div>
      </div>

      <div className="sidewindow_chat">
        <SidewindowChat addNewChat />
        <SidewindowChat />
        <SidewindowChat />
        <SidewindowChat />
      </div>
    </div>
  );
}

export default Sidewindow;
