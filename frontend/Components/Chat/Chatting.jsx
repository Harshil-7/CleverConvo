import React from "react";

//Internal import
import { SideBar, Chat, Help, History, Sitting } from "./index";

const Chatting = () => {
  return (
    <section className="chatting-wrapper pt-0">
      <SideBar />
      <div className="tab-content">
        <Chat />
        <History />
        <Help />
        <Sitting />
      </div>
    </section>
  );
};

export default Chatting;
