import styled from "@emotion/styled";

export const Wrap = styled.div`
  width: 1080px;
  margin: 0 auto;
`;
export const InnerWrap = styled.div`
  margin: 0 auto;
`;
export const Top = styled.div`
  position: absolute;
  width: 1080px;
  margin: 0 auto;
  top: 26px;
  .title {
    font-size: 24px;
    font-weight: 700;
    padding-left: 10px;
    padding-bottom: 22px;
    border-bottom: 1px solid #000;
  }
`;

export const DateInput = styled.div`
  position: absolute;
  right: 0px;
  margin-top: 15px;
  margin-bottom: 20px;
  padding-right: 100px;
  input {
    width: 313px;
    height: 40px;
    border: 1px solid #a9a7a7;
    border-radius: 5px;
    padding-left: 15px;
    font-size: 16px;
  }
`;

export const MainWrap = styled.div`
  /* margin: 0 auto; */
`;

export const OrderBoxWrap = styled.div`
  padding-left: 80px;
  position: absolute;
  top: 150px;
`;

export const OrderBox = styled.div`
  display: flex;
  width: 900px;
  height: 200px;
  border: 1px solid #a9a7a7;
  margin-bottom: 40px;
  justify-content: space-between;
`;

export const OrderBoxInner = styled.div`
  padding-top: 27px;
  padding-left: 20px;
  display: block;
`;

export const TimeWrap = styled.div`
  display: flex;
  .order-date,
  .order-time {
    font-size: 34px;
    font-weight: 700;
  }
  .order-date {
    margin-left: 10px;
  }
  .order-time {
    padding-left: 20px;
  }
`;

export const PriceMenuWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 10px;
  padding-top: 10px;
  height: 130px;
`;

export const PriceWrap = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
  .order-count,
  .order-price {
    font-size: 24px;
    font-weight: 700;
  }
  .order-type {
    font-size: 25px;
    font-weight: 700;
  }
`;
export const MenuWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 70px;
  justify-content: space-between;
  padding-bottom: 20px;
  .order-menu-1,
  .order-menu-2 {
    font-size: 24px;
  }
`;


export const CancleButton = styled.button`
  border: none;
  color: #fff;
  width: 100px;
  height: 50px;
  background-color: #ff0000;
  font-size: 25px;
  font-weight: 700;
  margin-right: 20px;
  margin-top: 20px;
`;
