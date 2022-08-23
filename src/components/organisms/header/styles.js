import styled from "styled-components/macro";

export const HeaderWrapper = styled.div`
  display: flex;
  height: 80px;
`;

export const Components = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0px 20px;
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00bfb6;
  font-weight: 900;
  font-size: 20px;
`;

export const Avatar = styled.img`
  height: 60px;
  border-radius: 9999px;
  border: 1px solid white;
`;
