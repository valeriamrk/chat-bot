import React from "react";
import * as S from "./styles";

const MyButton = (props) => {
  const { children, clickButton, ...other } = props;

  return (
    <S.MyBytton onClick={() => clickButton()} {...other}>
      {children}
    </S.MyBytton>
  );
};

export default MyButton;
