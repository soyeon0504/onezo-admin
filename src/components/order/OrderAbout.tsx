// 소연
import React, { useEffect, useState } from "react";
import {
  InnerWrap,
  OrderTop,
  OrderTopButton,
  OrderTopInner,
  Wrap,
} from "../../styles/order/OrderAboutStyle";
import WaitComponent from "../../components/order/WaitComponent";
import CookingComponent from "../../components/order/CookingComponent";
import CompletedComponent from "../../components/order/CompletedComponent";
import { getOrderState } from "../../api/order/order_api";

interface IOrderItem {
  orderItemId: number;
  orderId: number;
  menuId: number;
  quantity: number;
  menuName: string
}

interface IProps {
  orderId: number;
  storeId: number;
  memberId: number;
  status: string;
  orderDate: string;
  takeInOut: string;
  orderItems: IOrderItem[];
  totalPrice: number
}

const OrderAbout = () => {
  const [activeComponent, setActiveComponent] = useState("조리대기중");
  const [focus, setFocus] = useState("조리대기중");
  // 전달 받은 데이터
  const [orderState, setOrderState] = useState<IProps[]>([]);

  useEffect(() => {
    handleButtonClick(focus);
  }, [focus]);

  const handleButtonClick = async(status, item = "") => {
  // const handleButtonClick = async(component:string, item:string) => {
    if(item === "") {
      try {
        const res = await getOrderState(status);
        setOrderState(res);
      } catch (error) {
        console.log(error)
      }
    }
    setActiveComponent(status);
    console.log("Button clicked:", status);
  };

  const getOrderCount = (status: string) => {
    return orderState.filter(order => order.status === status).length;
  };

  return (
    <div>
      <Wrap>
        <InnerWrap>
          <OrderTop>
            <OrderTopInner>
              <OrderTopButton
              $focus={focus === "조리대기중"}
                key={`조리대기중`}
                onClick={() => {
                  setFocus("조리대기중");
                  handleButtonClick("조리대기중");
                }}
                style={{
                  borderRight: "none",
                }}
              >
                <span>주문 대기 {getOrderCount("조리대기중")}건</span>
              </OrderTopButton>
              <OrderTopButton
                key={`조리중`}
                $focus={focus === "조리중"}
                onClick={() => {
                  setFocus("조리중");
                  handleButtonClick("조리중");
                }}
                style={{
                }}
              >
                <span>조리 중 {getOrderCount("조리중")}건</span>
              </OrderTopButton>
              <OrderTopButton
                key={`조리완료`}
                $focus={focus === "조리완료"}
                onClick={() => {
                  setFocus("조리완료");
                  handleButtonClick("조리완료");
                }}

                style={{
                  borderLeft: "none",
                }}
              >
                <span>조리 완료 {getOrderCount("조리완료")}건</span>
              </OrderTopButton>
            </OrderTopInner>
          </OrderTop>
          {activeComponent === "조리대기중" && getOrderCount("조리대기중") > 0 && (
            <WaitComponent orderState={orderState.filter(order => order.status === "조리대기중")} />
          )}
          {activeComponent === "조리중" && getOrderCount("조리중") > 0 && (
            <CookingComponent orderState={orderState.filter(order => order.status === "조리중")} />
          )}
          {activeComponent === "조리완료" && getOrderCount("조리완료") > 0 && (
            <CompletedComponent orderState={orderState.filter(order => order.status === "조리완료")} />
          )}
        </InnerWrap>
      </Wrap>
    </div>
  );
};

export default OrderAbout;
