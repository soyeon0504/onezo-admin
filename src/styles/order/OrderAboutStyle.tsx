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

export const OrderTopButton = styled.button<{$focus:boolean}>`
  width: 300px;
  height: 70px;
  border: 1px solid ${({$focus})=> $focus ? '#ff8b38': '#a9a7a7' };
  color: ${({$focus})=> $focus ? "#fff" : "#000"};
  font-size: 24px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  background-color: ${({$focus})=> $focus ? '#ff8b38': '#fff' };
  cursor: pointer;
  span {
      padding-top: 20px;
  }
`;
