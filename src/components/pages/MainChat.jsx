import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import Header from "../organisms/header/Header";
import DialogArea from "../organisms/dialogArea/DialogArea";
import SendMessageArea from "../organisms/sendMessageArea/SendMessageArea";
import {
  initChatAsync,
  requestChatAsync,
  addHumanMessageToChatHistory,
  clearChatData,
} from "../../store/messagesSlice";

import { getStateFromLocalStorage } from "../../store/helpers/localStorageHelpers";
import { Loader } from "../atoms/loader/Loader";

const MainChat = (props) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const { isLoading, cuid, chatHistory } = useSelector(
    (state) => state.messageData
  );

  useEffect(() => {
    const cacheState = getStateFromLocalStorage();
    if (!cacheState) {
      dispatch(initChatAsync());
    }
  }, [dispatch]);

  const initChat = () => {
    localStorage.clear();
    dispatch(initChatAsync());
  };

  const sendMessage = () => {
    dispatch(addHumanMessageToChatHistory(inputValue));
    dispatch(requestChatAsync({ cuid: cuid, message: inputValue }));
    setInputValue("");
  };

  const refreshChat = () => {
    dispatch(clearChatData());
    initChat();
  };

  return (
    <S.MainWrapper>
      <Header refreshChat={refreshChat} />
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <DialogArea inputValue={inputValue} messageData={chatHistory} />
      )}
      <SendMessageArea
        inputValue={inputValue}
        setInputValue={setInputValue}
        sendMessage={sendMessage}
      />
    </S.MainWrapper>
  );
};

export default MainChat;
