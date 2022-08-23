import React from "react";
import MyButton from "../../atoms/myButton/MyButton";
import * as S from "./styles";
import { IoRefreshOutline } from "react-icons/io5";
import botAvatar from "../../../assets/images/botAvatar.png"


const Header = (props) => {
  const { refreshChat } = props;
  return (
    <S.HeaderWrapper>
      <S.Components>
        <S.Avatar src={botAvatar}></S.Avatar>
        <S.Title>Поговорим?</S.Title>
        <MyButton clickButton={refreshChat}>
          <IoRefreshOutline />
        </MyButton>
      </S.Components>
    </S.HeaderWrapper>
  );
};

export default Header;
