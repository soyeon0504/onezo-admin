import React from "react";
import styled from "@emotion/styled";
import { useState } from "react";
import { putOrderCancle } from "../../api/order/order_api";


export const Wrap = styled.div`
position: fixed;
margin-left: 340px;
  width: 300px;
  height: 200px;
  border: 1px solid #572a01;
  border-radius: 15px;
  background-color: #fff;
  z-index: 999999;
`;
export const InnerWrap = styled.div`
margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 200px;
  justify-content: space-between;
`;

export const NoticeText = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #572a01;
  margin: 0 auto;
  margin-top: 50px;
`;

export const BtWrap = styled.div`
  width: 175px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 45px;
`;

export const CancelBt = styled.button`
  width: 80px;
  height: 35px;
  border-radius: 5px;
  background: #fff;
  border: none;
  cursor: pointer;
  color: #572a01;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: 1px solid #572a01;
`;
export const SaveBt = styled(CancelBt)`
  background: #ff8b38;
  border: 1px solid #ff8b38;
  color: #fff;
  cursor: pointer;
`;


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
  totalPrice: number
}


const OrderCancelModal = ({ orderId, onClose }) => {
  const [cookingOrderState, setCookingOrderState] = useState<IProps[]>([]);

  const handleClickCancle = async (orderId: any) => {
    try {
      const res = await putOrderCancle(orderId);
      setCookingOrderState(res?.data);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Wrap>
        <InnerWrap>
          <NoticeText>조리 완료된 주문입니다.<br/> 환불 처리하시겠습니까?</NoticeText>
          <BtWrap>
            <CancelBt onClick={onClose}>취소</CancelBt>
            <SaveBt onClick={() => handleClickCancle(orderId)}>환불</SaveBt>
          </BtWrap>
        </InnerWrap>
      </Wrap>
    </>
  );
};

export default OrderCancelModal;
