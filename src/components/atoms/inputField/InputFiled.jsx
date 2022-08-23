import React from "react";
import * as S from "./styles";

const InputFiled = (props) => {
  const { inputValue, setInputValue } = props;

  return (
    <S.InputField
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};

export default InputFiled;
