import React from "react";
import { postRegularHoliday } from "../../api/schedule/schedule_api.tsx";
import {
  BtWrap,
  CancelBt,
  ClosedDayInnerWrap,
  DayWrap,
  HolidayWrap,
  RegularWrap,
  SaveBt,
  SelectWrap,
  TemporaryWrap,
  TimeSetting,
  Wrap
} from "../../styles/schedule/ScheduleModalStyle.tsx";
import { useState } from "react";

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

const dayList = [
  "날짜 선택",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
  "일요일",
];

interface IDayOfWeek {
      dayOfWeek: string
}

const ClosedDaySettingModal = ({ onClose }) => {
  const [selectedDays, setSelectedDays] = useState<IDayOfWeek[]>([])

  
  const handleCheckboxChange = (day) => {
    setSelectedDays((prev) =>
      prev.some((d) => d.dayOfWeek === day)
    ? prev.filter((d) => d.dayOfWeek !== day)
    : [...prev, { dayOfWeek: day }]
  );
};

const saveSuccess = async e => {
  e.preventDefault();
  console.log("saveSuccess 함수가 호출되었습니다.");
  const regularHolidays = selectedDays.map((day) => ({ dayOfWeek: day.dayOfWeek }));
  try {
      const res = await postRegularHoliday();
      console.log(res);
      const resStatus = res.status.toString();
      if (resStatus.charAt(0) === "4") {
        alert("오류가 발생했습니다. 다시 시도해주세요");
      } else if (res.status === 201) {
        alert("저장에 성공하였습니다.");
      } else {
        alert("알 수 없는 응답 상태입니다.");
      }
    } catch (error) {
      console.error("Error during save:", error);
      alert("네트워크 오류가 발생했습니다. 다시 시도해주세요");
    }
  };

  return (
    <>
      <Wrap>
        <ClosedDayInnerWrap>
          {/* <SelectWrap>
            <select>
              <option>대구 동성로점</option>
              <option>대구 중앙로점</option>
            </select>
          </SelectWrap> */}
          <HolidayWrap>
            <RegularWrap>
              <div className="regular-holiday">정기휴무</div>
              <DayWrap>
                {dayList.slice(1).map((day, index) => (
                  <label key={index}>
                    <input
                      type="checkbox"
                      value={day}
                      onChange={() => handleCheckboxChange(day)}
                    />
                    {day}
                  </label>
                ))}
              </DayWrap>
            </RegularWrap>
            <TemporaryWrap>
              <div className="temporary-holiday">임시휴무</div>
              <TimeSetting>
                <select>
                  {dayList.map((item, index) => {
                    return <option key={`day-list-${index}`}>{item}</option>;
                  })}
                </select>
                <div className="from-wrap">
                  <select>
                    {timeList.map((item, index) => {
                      return <option key={`time-list-${index}`}>{item}</option>;
                    })}
                  </select>
                  <div className="from">부터</div>
                </div>
              </TimeSetting>
              <TimeSetting>
                <div className="to-wrap">
                  <select>
                    {timeList.map((item, index) => {
                      return <option key={`time-list-${index}`}>{item}</option>;
                    })}
                  </select>
                  <div className="to">까지</div>
                </div>
              </TimeSetting>
            </TemporaryWrap>
          </HolidayWrap>
          <BtWrap>
            <CancelBt onClick={onClose}>취소</CancelBt>
            <SaveBt type="submit" onClick={saveSuccess}>
              저장
            </SaveBt>
          </BtWrap>
        </ClosedDayInnerWrap>
      </Wrap>
    </>
  );
};

export default ClosedDaySettingModal;
