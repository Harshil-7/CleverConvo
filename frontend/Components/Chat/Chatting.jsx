import React from "react";

//Internal import
import { SideBar, Chat, Help, History, Setting } from "./index";

const Chatting = () => {
  return (
    <section className="chatting-wrapper pt-0">
      <SideBar />
      <div className="tab-content">
        <Chat />
        <History />
        <Help />
        <Setting />
      </div>
    </section>
  );
};

export default Chatting;
