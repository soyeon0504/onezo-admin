import React from "react";
import {
  AcceptBt,
  ButtonWrap,
  InnerWrap,
  MenuWrap,
  OrderBox,
  OrderBoxInner,
  OrderBoxWrap,
  PriceMenuWrap,
  PriceWrap,
  RejectBt,
  TimeWrap,
  Wrap,
} from "../../styles/order/WaitComponentStyle";
import OrderAbout from '../../components/order/OrderAbout'

const orderData = [
  {
    time: "13:33",
    totalCount: "2",
    price: "22000",
    type: "포장",
    menu: "원조바삭후라이드",
    menuCount: "1",
    side: "사이드",
    sideCount: "2"
  },
  {
    time: "13:33",
    totalCount: "2",
    price: "22000",
    type: "포장",
    menu: "원조바삭후라이드",
    menuCount: "1",
    side: "사이드",
    sideCount: "2"
  },
  {
    time: "13:33",
    totalCount: "2",
    price: "22000",
    type: "포장",
    menu: "원조바삭후라이드",
    menuCount: "1",
    side: "사이드",
    sideCount: "2"
  },
  {
    time: "13:33",
    totalCount: "2",
    price: "22000",
    type: "포장",
    menu: "원조바삭후라이드",
    menuCount: "1",
    side: "사이드",
    sideCount: "2"
  },
  {
    time: "13:33",
    totalCount: "2",
    price: "22000",
    type: "포장",
    menu: "원조바삭후라이드",
    menuCount: "1",
    side: "사이드",
    sideCount: "2"
  },
  {
    time: "13:33",
    totalCount: "2",
    price: "22000",
    type: "포장",
    menu: "원조바삭후라이드",
    menuCount: "1",
    side: "사이드",
    sideCount: "2"
  },
]

const WaitComponent = () => {
  return (
    <>
      <Wrap>
        {/* <OrderAbout /> */}
        <InnerWrap>
          <OrderBoxWrap>
            {orderData && orderData.map((item, index) => (
              <OrderBox key={index}>
              <OrderBoxInner>
                <TimeWrap>
                  <div className="order-time">{item.time}</div>
                </TimeWrap>
                <PriceMenuWrap>
                  <PriceWrap>
                    <div className="order-count">[메뉴 {item.totalCount}개]</div>
                    <div className="order-price">{item.price}원</div>
                    <div className="order-type">({item.type})</div>
                  </PriceWrap>
                  <MenuWrap>
                    <div className="order-menu-1">{item.menu} {item.menuCount}개</div>
                    <div className="order-menu-2">{item.side} {item.sideCount}개</div>
                  </MenuWrap>
                </PriceMenuWrap>
                <ButtonWrap>
                  <AcceptBt>
                    <button>접수하기</button>
                  </AcceptBt>
                  <RejectBt>
                    <button>주문거부</button>
                  </RejectBt>
                </ButtonWrap>
              </OrderBoxInner>
            </OrderBox>
            ))}
            
          </OrderBoxWrap>
        </InnerWrap>
      </Wrap>
    </>
  );
};

export default WaitComponent;
