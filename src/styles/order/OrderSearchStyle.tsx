import styled from "@emotion/styled";

export const Wrap = styled.div`
  width: 100vw;
`;
export const InnerWrap = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;
export const Top = styled.div`
position: absolute;
width: 1300px;
margin: 0 auto;
top: 80px;
  .title {
    font-size: 30px;
    font-weight: 700;
    padding-left: 220px;
    padding-bottom: 22px;
  }
  hr {
    width: 1000px;
    border: 1px solid #000;
  }
`;

export const DateInput = styled.div`
 position: absolute;
  right: 0px;
  margin-top: 10px;
  margin-bottom: 20px;
input {
  top: 0;
  right: 150px;
  position: absolute;
  width: 313px;
  height: 40px;
  border: 1px solid #a9a7a7;
  border-radius: 5px;
}
`;

export const MainWrap = styled.div`
width: 1300px;
margin: 0 auto;
`;

export const OrderBoxWrap = styled.div`
  padding-left: 250px;
  position: absolute;
  top: 200px;
  padding-top: 25px;
`;

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

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 175px;
  height: 140px;
  justify-content: space-between;
`;

export const CancleButton = styled.button`
  position: absolute;
  top: 25px;
  right: 20px;
  border: none;
  border-radius: 5px;
  color: #fff;
  width: 100px;
  height: 50px;
  background-color: #ff0000;
  font-size: 25px;
  font-weight: 700;
`;
