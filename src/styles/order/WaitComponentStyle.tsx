import styled from "@emotion/styled";

export const Wrap = styled.div`
  width: 1080;
  margin: 0 auto;
`;

export const InnerWrap = styled.div`
  width: 1080px;
  margin: 0 auto;
`;

export const OrderBoxWrap = styled.div`
padding-left: 130px;
position: absolute;
margin: 0  auto;
top: 120px;
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

export const AcceptBt = styled.div`
  border: 1px solid #ff8b38;
  background-color: #ff8b38;
  width: 220px;
  height: 60px;
  font-size: 25px;
  cursor: pointer;
  text-align: center;
  button {
    color: #fff;
    border: none;
    background-color: transparent;
    font-weight: 700;
    cursor: pointer;
    padding-top: 15px;
  }
`;
export const RejectBt = styled.button`
  border: 1px solid #a9a7a7;
  background-color: #fff;
  width: 220px;
  height: 60px;
  cursor: pointer;
  button {
    font-weight: 700;
    border: none;
    background-color: transparent;
    font-size: 25px;
    color: #572a01;
    cursor: pointer;
  }
`;

export const CompleteButton = styled.button`
width: 220px;
height: 80px;
color: #fff;
border: none;
background-color: #FF8B38;
font-size: 25px;
font-weight: 700;
margin-top: 30px;
margin-left: 10px;
`
export const CancleButton = styled.button`
position: absolute;
border: none;
color: #fff;
width: 100px;
height: 50px;
background-color: #ff0000;
font-size: 25px;
font-weight: 700;
right: 20px;
`