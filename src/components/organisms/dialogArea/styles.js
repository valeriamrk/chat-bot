import styled from "styled-components/macro";

export const DialogWrapper = styled.div`
  align-items: ${(props) => (props.isHuman ? "flex-end" : "flex-start")};
  overflow-y: scroll;
  height: 420px;
`;
