import styled from "@emotion/styled";

export const Wrap = styled.div`
position: fixed;
margin-left: 200px;
  width: 533px;
  height: 646px;
  border: 1px solid #572a01;
  border-radius: 15px;
  background-color: #fff;
  z-index: 999999;
`;
export const InnerWrap = styled.div`
margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 345px;
  height: 420px;
  margin: 0 auto;
  justify-content: space-between;
  margin-top: 100px;
`;

export const NoticeText = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: #572a01;
  margin: 0 auto;
  margin-top: 50px;
`;

export const TimeControl = styled.div`
  width: 215px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  button {
    font-size: 45px;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  div {
    font-size: 40px;
    font-weight: 700;
    color: #572a01;
  }
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const BtWrap = styled.div`
  width: 275px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

export const CancelBt = styled.button`
  width: 125px;
  height: 50px;
  border-radius: 5px;
  background: #fff;
  border: none;
  cursor: pointer;
  color: #572a01;
  font-size: 22px;
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

// TimeSettingModal
export const SelectWrap = styled.div`
margin: 0 auto;
  select {
    border: 1px solid #000;
    width: 400px;
    height: 40px;
    font-size: 15px;
    font-weight: 700;
    padding-left: 13px;
  }
`;

export const TimeSettingWrap = styled.div`
  font-size: 15px;
  font-weight: 700;
  select {
    width: 109px;
    height: 32px;
    border: 1.5px solid #000;
  }
`;
export const TimeSettingFrom = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 300px;
  align-items: center;
  select {
    padding-left: 7px;
  }
`;
export const TimeSettingTo = styled.div`
  display: flex;
  width: 230px;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 10px;
  margin-left: 72px;
  select {
    padding-left: 7px;
  }
`;

// ClosedDaySetting
export const RegularWrap = styled.div`
  height: 200px;
  width: 75px;
  font-size: 15px;
  font-weight: 700;
  label {
    display: flex;
    gap: 4px;
  }
  `;
export const DayWrap = styled.div`
margin-top: 10px;
display: flex;
flex-direction: column;
gap: 15px;
input[type=checkbox] {
  accent-color: #ff8b38;
}
`;
export const TemporaryWrap = styled.div``;
