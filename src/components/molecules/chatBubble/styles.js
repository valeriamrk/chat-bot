import styled from "styled-components/macro";

export const ChatBubble = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: ${(props) => (props.isHuman ? "20px 50px" : "20px")};
  padding: 20px;
  text-align: start;
  word-break: break-word;
  color: black;
  font-family: arial;
  position: relative;
  background: rgba(255, 255, 255, 0.55);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(6.5px);
  -webkit-backdrop-filter: blur(6.5px);
  border-radius: 10px;

  &:after {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-top: 7px solid rgba(255, 255, 255, 0.55);
    border-bottom: 7px solid transparent;
    border-left: ${(props) =>
      props.isHuman
        ? "7px solid rgba(255, 255, 255, 0.55)"
        : "7px solid transparent"};
    border-right: ${(props) =>
      props.isHuman
        ? "7px solid transparent"
        : "7px solid rgba(255, 255, 255, 0.55)"};
    left: ${(props) => (props.isHuman ? "" : "-11px")};
    right: ${(props) => (props.isHuman ? "-11px" : "")};
    top: 10px;
  }
`;

export const Avatar = styled.img`
  height: 30px;
  border-radius: 9999px;
  border: 1px solid white;
  margin-top: 20px;
  margin-left: 20px;
`;

export const Message = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.isHuman ? "flex-end" : "flex-start")};
  align-items: flex-start;
  width: 100%;
`;

export const MessageWrapper = styled.div`
  display: flex;
  justify-content: ${(props) => (props.isHuman ? "flex-end" : "flex-start")};
  width: 100%;
  align-items: ${(props) => (props.isHuman ? "flex-end" : "flex-start")};
`;
