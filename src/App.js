import React from "react";

import "./App.css";
import Sidewindow from "./Sidewindow";
import Chat from "./Chat";

function App() {
  return (
    <div className="App">
      <div className="app_body">
        <Sidewindow />
        <Chat />
      </div>
    </div>
  );
}

export default App;
