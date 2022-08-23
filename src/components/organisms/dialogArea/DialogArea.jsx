import React, { useEffect, useRef } from "react";
import ChatBubble from "../../molecules/chatBubble/ChatBubble";
import * as S from "./styles";

const DialogArea = (props) => {
  const { messageData } = props;

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messageData]);

  return (
    <S.DialogWrapper>
      {messageData?.map((element) => (
        <ChatBubble
          key={element.id}
          message={element.message}
          isHuman={element.isHuman}
        />
      ))}
      <div ref={messagesEndRef} />
    </S.DialogWrapper>
  );
};

export default DialogArea;
