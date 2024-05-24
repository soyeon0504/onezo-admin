import React from "react";
import { CancelBt, SaveBt } from "../../styles/schedule/ScheduleModalStyle";

const TimeSettingModal = ({ onClose }) => {
  return (
    <div>
      <CancelBt onClick={onClose}>취소</CancelBt>
      <SaveBt onClick={onClose}>저장</SaveBt>
    </div>
  );
};

export default TimeSettingModal;
