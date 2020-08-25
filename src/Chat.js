import React, { useEffect, useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import { SearchOutlined, AttachFile, MoreVert } from "@material-ui/icons";

function Chat() {
  const [input, setInput] = useState();
  const [seed, setSeed] = useState();

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 3000));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("message typed", input);
  };

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
      <div className="Chat_body">
        <p className={`Chat_message ${true && "Chat_reciver"}`}>
          <span className="Chat_name">akash</span>
          helo
          <span className="Chat_timestamp">2:45am</span>
        </p>
      </div>
      <div className="Chat_footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
