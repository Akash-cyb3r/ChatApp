import React, { useEffect, useState } from "react";
import "./SidewindowChat.css";
import { Avatar } from "@material-ui/core";

function SidewindowChat({ addNewChat }) {
  const [seed, setSeed] = useState();

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 3000));
  }, []);

  const createChat = () => {
    const groupName = prompt("enter group name ");

    if (groupName) {
    }
  };

  return !addNewChat ? (
    <div className="sidewindowChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidewindowChat_info">
        <h2>Group name</h2>
        <p>last msg</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidewindowChat">
      <h2>Add new chat</h2>
    </div>
  );
}

export default SidewindowChat;
