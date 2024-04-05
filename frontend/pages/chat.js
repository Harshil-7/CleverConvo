import React from "react";

//Internal import
import { Chatting, Modal } from "../Components/Chat/index";

const chat = () => {
  return (
    <div>
      <Chatting />
      <Modal />

      {/* SCRIPT */}
      <script type="module" src="scripts.js"></script>
    </div>
  );
};

export default chat;
