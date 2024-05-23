import styled from "@emotion/styled";

export const Wrap = styled.div``
export const InnerWrap = styled.div``
export const Top = styled.div``
export const MainWrap = styled.div``
export const DateInput = styled.div``

export const OrderBoxWrap = styled.div`
padding-left: 250px;
position: absolute;
top: 200px;
`

export const OrderBox = styled.div`
  display: flex;
  width: 900px;
  height: 200px;
  border: 1px solid #a9a7a7;
  margin-bottom: 40px;
  `;

export const OrderBoxInner = styled.div`
padding-top: 27px;
padding-left: 20px;
display: flex;
`

export const TimeWrap = styled.div`
  .order-time {
    font-size: 34px;
    font-weight: 700;
  }
`;

export const PriceMenuWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 50px;
  height: 130px;
`;

export const PriceWrap = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
  .order-count,
  .order-price {
    font-size: 24px;
    font-weight: 500;
  }
  .order-type {
    font-size: 25px;
    font-weight: 700;
  }
`;
export const MenuWrap = styled.div`
display: flex;
flex-direction: column;
height: 80px;
justify-content: space-between;
  .order-menu-1, .order-menu-2 {
    font-size: 24px;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 175px;
  height: 140px;
  justify-content: space-between;
`;

export const CancleButton = styled.button`
border: none;
color: #fff;
width: 100px;
height: 50px;
background-color: #ff0000;
`