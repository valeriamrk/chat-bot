import React from "react";
import InputFiled from "../../atoms/inputField/InputFiled";
import { IoIosPaperPlane } from "react-icons/io";
import MyButton from "../../atoms/myButton/MyButton";
import * as S from "./styles";

const SendMessageArea = (props) => {
  const { inputValue, setInputValue, sendMessage } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <S.SendMessageWrapper onSubmit={handleSubmit}>
      <InputFiled inputValue={inputValue} setInputValue={setInputValue} />
      <MyButton clickButton={sendMessage} disabled={!inputValue} type="submit">
        <IoIosPaperPlane />
      </MyButton>
    </S.SendMessageWrapper>
  );
};

export default SendMessageArea;
