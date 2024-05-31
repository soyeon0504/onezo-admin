import React from "react";
import { SoldOutBtZone, SoldOutCancelBt, SoldOutModalStyle, SoldOutTxtZone } from "../../styles/menu/SoldOutModalStyle";


const SoldOutModal = ({ soldOutStatus, onCloseModal }) => {
  return (
    <SoldOutModalStyle>
      <SoldOutCancelBt>
        <img src="/images/review/bt_cancel.svg" onClick={onCloseModal} />
      </SoldOutCancelBt>
      <SoldOutTxtZone>
        {soldOutStatus == "y" ? (
          <h2>해당 메뉴를 품절처리하시겠습니까?</h2>
        ) : (
          <h2>해당 메뉴의 품절을 해지하겠습니까?</h2>
        )}
      </SoldOutTxtZone>
      <SoldOutBtZone>
        <button onClick={onCloseModal}>취소</button>
        <button>확인</button>
      </SoldOutBtZone>
    </SoldOutModalStyle>
  );
};

export default SoldOutModal;
