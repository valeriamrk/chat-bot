import styled from "styled-components";

export const MyBytton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: none;
  color: #00bfb6;
  font-weight: 800;
  margin: 0;
  padding: ${(props) => (props.textBtn ? "4px 8px" : "0")};
  cursor: pointer;
  font-size: ${(props) => (props.textBtn ? "16px" : "30px")};
  background: ${(props) =>
    props.textBtn ? "rgba( 255, 255, 255, 0.25 )" : "none"};
  box-shadow: ${(props) =>
    props.textBtn ? "0 2px 8px 0 rgba( 31, 38, 135, 0.37 )" : ""};
  border: ${(props) =>
    props.textBtn ? "1px solid rgba( 255, 255, 255, 0.18 )" : "none"};
  border-radius: 5px;
  &:hover {
    -webkit-box-shadow: ${(props) =>
      props.textBtn ? "0px 5px 10px 2px rgba(34, 60, 80, 0.2)" : ""};
    -moz-box-shadow: ${(props) =>
      props.textBtn ? "0px 5px 10px 2px rgba(34, 60, 80, 0.2)" : ""};
    box-shadow: ${(props) =>
      props.textBtn ? "0px 5px 10px 2px rgba(34, 60, 80, 0.2)" : ""};
  }
`;
