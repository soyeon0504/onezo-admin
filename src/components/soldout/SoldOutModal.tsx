import React from "react";
import { SoldOutBtZone, SoldOutCancelBt, SoldOutModalStyle, SoldOutTxtZone } from "../../styles/menu/SoldOutModalStyle";


const SoldOutModal = ({ soldOutStatus, onCloseModal, onChangeStatus }) => {
  return (
    <SoldOutModalStyle>
      <SoldOutCancelBt>
        <img src="/images/review/bt_cancel.svg" onClick={onCloseModal} />
      </SoldOutCancelBt>
      <SoldOutTxtZone>
        {soldOutStatus == "N" ? (
          <h2>해당 메뉴를 <h3 style={{color:"red"}}>품절처리</h3>하시겠습니까?</h2>
        ) : (
          <h2>해당 메뉴를 <h3 style={{color:"blue"}}>판매처리</h3>하시겠습니까?</h2>
        )}
      </SoldOutTxtZone>
      <SoldOutBtZone>
        <button className="cancel_bt" onClick={onCloseModal}>취소</button>
        <button onClick={onChangeStatus}>확인</button>
      </SoldOutBtZone>
    </SoldOutModalStyle>
  );
};

export default SoldOutModal;
