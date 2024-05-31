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

const OrderAbout = () => {
  const [activeComponent, setActiveComponent] = useState("wait");
  const [focus, setFocus] = useState("wait");
  // 전달 받은 데이터
  const [orderState, setOrderState] = useState();
  
  const handleButtonClick = async(component:string, item:string) => {
    if(item === "") {
      try {
        const res = await getOrderState();
        setOrderState(res);
      } catch (error) {
        console.log(error)
      }
    }
    setActiveComponent(component);
    console.log("Button clicked:", component);
  };


  return (
    <div>
      <Wrap>
        <InnerWrap>
          <OrderTop>
            <OrderTopInner>
              <OrderTopButton
              $focus={focus === "wait"}
                key={`wait`}
                onClick={() => {
                  setFocus("wait");
                  handleButtonClick("wait");
                }}
                style={{
                  borderRight: "none",
                }}
              >
                <span>주문 대기 {}건</span>
              </OrderTopButton>
              <OrderTopButton
                key={`cooking`}
                $focus={focus === "cooking"}
                onClick={() => {
                  setFocus("cooking");
                  handleButtonClick("cooking");
                }}
                style={{
                }}
              >
                <span>조리 중 {}건</span>
              </OrderTopButton>
              <OrderTopButton
                key={`completed`}
                $focus={focus === "completed"}
                onClick={() => {
                  setFocus("completed");
                  handleButtonClick("completed");
                }}

                style={{
                  borderLeft: "none",
                }}
              >
                <span>조리 완료</span>
              </OrderTopButton>
            </OrderTopInner>
          </OrderTop>
          {activeComponent === "wait" && <WaitComponent />}
          {activeComponent === "cooking" && <CookingComponent />}
          {activeComponent === "completed" && <CompletedComponent />}
        </InnerWrap>
      </Wrap>
    </div>
  );
};

export default OrderAbout;
