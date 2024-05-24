import styled from "@emotion/styled";

export const Wrap = styled.div`
  width: 1080px;
`;

export const InnerWrap = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;
export const OrderTop = styled.div`
  position: absolute;
  margin-left: 130px;
  top: 10px;
  background-color: #fff;
`;

export const OrderTopInner = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OrderTopButton = styled.button`
  width: 300px;
  height: 70px;
  border: 1px solid #a9a7a7;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  background-color: #fff;
  
  span {
      padding-top: 20px;
  }
  &:hover {
    background-color: #ff8b38;
    color: #fff;
    cursor: pointer;
  }
`;
