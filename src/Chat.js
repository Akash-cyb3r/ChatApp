import React, { useEffect, useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined, AttachFile, MoreVert } from "@material-ui/icons";

function Chat() {
  const [seed, setSeed] = useState();

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 3000));
  }, []);

  return (
    <div className="Chat">
      <div className="Chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="Chat_headerInfo">
          <h3>Group name</h3>
          <p>Last seen at.....</p>
        </div>
        <div className="Chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="Chat_body"></div>
      <div className="Chat_footer"></div>
    </div>
  );
}

export default Chat;
