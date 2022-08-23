import styled from "styled-components/macro";

export const MainWrapper = styled.div`
  margin-top: 20px;
  width: 400px;
  height: 600px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 20px;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LoaderArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
