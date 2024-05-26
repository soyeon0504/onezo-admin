import React from "react";
import {
  Wrap,
  BtWrap,
  CancelBt,
  InnerWrap,
  ModalBackground,
  SaveBt,
  SelectWrap,
  TimeSettingWrap,
  TimeSettingFrom,
  TimeSettingTo,
} from "../../styles/schedule/ScheduleModalStyle";

const TimeSettingModal = ({ onClose }) => {
  return (
    <>
      <Wrap>
        <InnerWrap>
          <SelectWrap>
            <select>
              <option>대구 동성로점</option>
              <option>대구 동성로점</option>
              <option>대구 동성로점</option>
              <option>대구 동성로점</option>
            </select>
          </SelectWrap>
          <TimeSettingWrap>
            <TimeSettingFrom>
              <div>월 ~ 일</div>
              <input />
              <input />
              <div>부터</div>
            </TimeSettingFrom>
            <TimeSettingTo>
            <input />
              <input />
              <div>까지</div>
            </TimeSettingTo>
          </TimeSettingWrap>
          <BtWrap>
            <CancelBt onClick={onClose}>취소</CancelBt>
            <SaveBt onClick={onClose}>저장</SaveBt>
          </BtWrap>
        </InnerWrap>
      </Wrap>
    </>
  );
};

export default TimeSettingModal;
