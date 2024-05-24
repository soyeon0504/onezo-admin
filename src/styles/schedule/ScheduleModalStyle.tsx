import styled from "@emotion/styled";

export const Wrap = styled.div`
width: 533px;
height: 646px;
border: 1px solid #572A01;
border-radius: 15px;
background-color: #fff;
z-index: 999999;
`
export const InnerWrap = styled.div`
display: flex;
flex-direction: column;
width: 345px;
height: 420px;
margin: 0 auto;
justify-content: space-between;
margin-top: 100px;
`

export const NoticeText = styled.div`
font-size: 22px;
font-weight: 700;
color: #572A01;
margin: 0 auto;
margin-top: 50px;
`

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
    color: #572A01;
}
`

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
  color: #572A01;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: 1px solid #572A01;
`
export const SaveBt = styled(CancelBt)`
  background: #FF8B38;
  border: 1px solid #FF8B38;
  color: #fff;
  cursor: pointer;
`;