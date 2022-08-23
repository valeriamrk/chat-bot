import React from "react";
import * as S from "./styles";
import botAvatar from "../../../assets/images/botAvatar.png"

const ChatBubble = (props) => {
  const { botAnswer, message, isHuman } = props;
  return (
    <S.MessageWrapper>
      {isHuman ? (
        <S.Message isHuman={isHuman}>
          <S.ChatBubble botAnswer={botAnswer} isHuman={isHuman}>
            {message}
          </S.ChatBubble>
        </S.Message>
      ) : (
        <S.Message isHuman={isHuman}>
          <S.Avatar src={botAvatar}></S.Avatar>
          <S.ChatBubble botAnswer={botAnswer} isHuman={isHuman}>
            {message}
          </S.ChatBubble>
        </S.Message>
      )}
    </S.MessageWrapper>
  );
};

export default ChatBubble;
