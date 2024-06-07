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

const timeList = [
  "00:00",
  "00:30",
  "01:00",
  "01:30",
  "02:00",
  "02:30",
  "03:00",
  "03:30",
  "04:00",
  "04:30",
  "05:00",
  "05:30",
  "06:00",
  "06:30",
  "07:00",
  "07:30",
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
  "23:00",
  "23:30",
];

const TimeSettingModal = ({ onClose }) => {
  return (
    <>
      <Wrap>
        <InnerWrap>
          {/* <SelectWrap>
            <select>
              <option>대구 동성로점</option>
              <option>대구 중앙로점</option>
            </select>
          </SelectWrap> */}
          <TimeSettingWrap>
            <TimeSettingFrom>
              <div>월 ~ 일</div>
              <select>
                {timeList.map((item, index) => {
                  return <option key={`time-list-${index}`}>{item}</option>;
                })}
              </select>
              <div>부터</div>
            </TimeSettingFrom>
            <TimeSettingTo>
              <select>
                {timeList.map((item, index) => {
                  return <option key={`time-list-${index}`}>{item}</option>;
                })}
              </select>
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
