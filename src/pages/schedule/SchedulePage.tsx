import React from "react";
import {
  ClosedDaySetting,
  Name,
  SettingButton,
  SettingWrap,
  TimePause,
  TimeSetting,
  Wrap,
} from "../../styles/schedule/ScheduleStyle";
import { useState } from "react";
import { ModalBackground } from "../../styles/schedule/ScheduleModalStyle";
import ClosedDaySettingModal from "../../components/schedule/ClosedDaySettingModal"
import TimePauseModal from "../../components/schedule/TimePauseModal";
import TimeSettingModal from "../../components/schedule/TimeSettingModal";

const SchedulePage = () => {

  const [timePasueModal, setTimePauseModal] = useState(false);
  const [timeSettingModal, setTimeSettingModal] = useState(false);
  const [closedDaySettingModal, setClosedDaySettingModal] = useState(false);
  const handleTimePause = () => {
    setTimePauseModal(true);
  };
  const handleTimeSetting = () => {
    setTimeSettingModal(true);
  };
  const handleClosedDay = () => {
    setClosedDaySettingModal(true);
  };
  const closeModal = () => {
    setTimePauseModal(false);
    setTimeSettingModal(false);
    setClosedDaySettingModal(false);
  };


  return (
    <>
    {timePasueModal && (
        <>
          <TimePauseModal onClose={closeModal}/>
          <ModalBackground />
        </>
      )}
      {timeSettingModal && (
        <>
          <TimeSettingModal onClose={closeModal}/>
          <ModalBackground />
        </>
      )}
      {closedDaySettingModal && (
        <>
          <ClosedDaySettingModal onClose={closeModal}/>
          <ModalBackground />
        </>
      )}
      <Wrap>
        <Name>김그린님</Name>
        <SettingWrap>
          <TimePause>
            <div className="text">영업 일시중지</div>
            <SettingButton onClick={()=> handleTimePause()}>설정하기</SettingButton>
          </TimePause>
          <TimeSetting>
            <div className="text">영업시간 설정</div>
            <SettingButton onClick={()=> handleTimeSetting()}>설정하기</SettingButton>
          </TimeSetting>
          <ClosedDaySetting>
            <div className="text">휴무일 설정</div>
            <SettingButton onClick={()=> handleClosedDay()}>설정하기</SettingButton>
          </ClosedDaySetting>
        </SettingWrap>
      </Wrap>
    </>
  );
};

export default SchedulePage;
