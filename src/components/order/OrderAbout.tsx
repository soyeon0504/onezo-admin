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
}

interface IProps {
  orderId: number;
  storeId: number;
  memberId: number;
  status: string;
  orderDate: string;
  takeInOut: string;
  orderItems: IOrderItem[];
}

const OrderAbout = () => {
  const [activeComponent, setActiveComponent] = useState("BEFORE_COOKING");
  const [focus, setFocus] = useState("BEFORE_COOKING");
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


  return (
    <div>
      <Wrap>
        <InnerWrap>
          <OrderTop>
            <OrderTopInner>
              <OrderTopButton
              $focus={focus === "BEFORE_COOKING"}
                key={`BEFORE_COOKING`}
                onClick={() => {
                  setFocus("BEFORE_COOKING");
                  handleButtonClick("BEFORE_COOKING");
                }}
                style={{
                  borderRight: "none",
                }}
              >
                <span>주문 대기 {orderState.length}건</span>
              </OrderTopButton>
              <OrderTopButton
                key={`COOKING`}
                $focus={focus === "COOKING"}
                onClick={() => {
                  setFocus("COOKING");
                  handleButtonClick("COOKING");
                }}
                style={{
                }}
              >
                <span>조리 중 {orderState.length}건</span>
              </OrderTopButton>
              <OrderTopButton
                key={`COMPLETED`}
                $focus={focus === "COMPLETED"}
                onClick={() => {
                  setFocus("COMPLETED");
                  handleButtonClick("COMPLETED");
                }}

                style={{
                  borderLeft: "none",
                }}
              >
                <span>조리 완료</span>
              </OrderTopButton>
            </OrderTopInner>
          </OrderTop>
          {activeComponent === "BEFORE_COOKING" && <WaitComponent orderState={orderState} />}
          {activeComponent === "COOKING" && <CookingComponent orderState={orderState} />}
          {activeComponent === "COMPLETED" && <CompletedComponent orderState={orderState} />}
        </InnerWrap>
      </Wrap>
    </div>
  );
};

export default OrderAbout;
