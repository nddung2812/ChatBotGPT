import React from 'react'
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";

const Chat = () => {
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    "testuser",
    "1234"
  );

  return (
    <div style={{ flexBasis: "100%" }}>Chat</div>
  )
}

export default Chat