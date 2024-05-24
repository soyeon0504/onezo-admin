import React from "react";
import {
  BtWrap,
  CancelBt,
  InnerWrap,
  NoticeText,
  SaveBt,
  TimeControl,
  Wrap,
} from "../../styles/schedule/ScheduleModalStyle";
import { useState } from "react";

const TimePauseModal = ({ onClose }) => {
  // 수량 상태를 정의합니다.
  const [quantity, setQuantity] = useState(30);

  // 수량을 증가시키는 함수입니다.
  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 10);
  };

  // 수량을 감소시키는 함수입니다.
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 10);
    }
  };

  return (
    <>
      <Wrap>
        <InnerWrap>
          <NoticeText>영업 임시중지 시간을 선택해주세요.</NoticeText>
          <TimeControl>
            <button onClick={decreaseQuantity}>-</button>
            <div>{quantity}</div>
            <button onClick={increaseQuantity}>+</button>
          </TimeControl>
          <BtWrap>
            <CancelBt onClick={onClose}>취소</CancelBt>
            <SaveBt onClick={onClose}>저장</SaveBt>
          </BtWrap>
        </InnerWrap>
      </Wrap>
    </>
  );
};

export default TimePauseModal;
