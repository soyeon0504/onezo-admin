import React from "react";
import {
  ButtonWrap,
  CancleButton,
  DateInput,
  InnerWrap,
  MainWrap,
  MenuWrap,
  OrderBox,
  OrderBoxInner,
  OrderBoxWrap,
  PriceMenuWrap,
  PriceWrap,
  TimeWrap,
  Top,
  Wrap,
} from "../../styles/order/OrderSearchStyle";
import Layout from "../../layouts/Layout"

const orderData = [
  {
    date: "2024.05.20",
    time: "13:33",
    totalCount: "2",
    price: "22000",
    type: "포장",
    menu: "원조바삭후라이드",
    menuCount: "1",
    side: "사이드",
    sideCount: "2",
  },
  {
    date: "2024.05.20",
    time: "13:33",
    totalCount: "2",
    price: "22000",
    type: "포장",
    menu: "원조바삭후라이드",
    menuCount: "1",
    side: "사이드",
    sideCount: "2",
  },
  {
    date: "2024.05.20",
    time: "13:33",
    totalCount: "2",
    price: "22000",
    type: "포장",
    menu: "원조바삭후라이드",
    menuCount: "1",
    side: "사이드",
    sideCount: "2",
  },
  {
    date: "2024.05.20",
    time: "13:33",
    totalCount: "2",
    price: "22000",
    type: "포장",
    menu: "원조바삭후라이드",
    menuCount: "1",
    side: "사이드",
    sideCount: "2",
  },
  {
    date: "2024.05.20",
    time: "13:33",
    totalCount: "2",
    price: "22000",
    type: "포장",
    menu: "원조바삭후라이드",
    menuCount: "1",
    side: "사이드",
    sideCount: "2",
  },
  {
    date: "2024.05.20",
    time: "13:33",
    totalCount: "2",
    price: "22000",
    type: "포장",
    menu: "원조바삭후라이드",
    menuCount: "1",
    side: "사이드",
    sideCount: "2",
  },
];

const OrderSearchPage = () => {
  return (
    <>
      <Wrap>
        <InnerWrap>
          <Top>
            <div className="title">주문 조회</div>
            {/* <hr /> */}
          {/* 날짜 선택 */}
            <DateInput>
              <input placeholder="날짜를 선택하세요"></input>
            </DateInput>
          </Top>
          <MainWrap>
            <OrderBoxWrap>
              {orderData &&
                orderData.map((item, index) => (
                  <OrderBox key={index}>
                    <OrderBoxInner>
                      <TimeWrap>
                        <div className="order-date">{item.date}</div>
                        <div className="order-time">{item.time}</div>
                      </TimeWrap>
                      <PriceMenuWrap>
                        <PriceWrap>
                          <div className="order-count">
                            [메뉴 {item.totalCount}개]
                          </div>
                          <div className="order-price">{item.price}원</div>
                          <div className="order-type">({item.type})</div>
                        </PriceWrap>
                        <MenuWrap>
                          <div className="order-menu-1">
                            {item.menu} {item.menuCount}개
                          </div>
                          <div className="order-menu-2">
                            {item.side} {item.sideCount}개
                          </div>
                        </MenuWrap>
                      </PriceMenuWrap>
                      <ButtonWrap>
                        <CancleButton>취소</CancleButton>
                      </ButtonWrap>
                    </OrderBoxInner>
                  </OrderBox>
                ))}
            </OrderBoxWrap>
          </MainWrap>
        </InnerWrap>
      </Wrap>
    </>
  );
};

export default OrderSearchPage;
