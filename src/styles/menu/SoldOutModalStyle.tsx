import styled from "@emotion/styled";

export const SoldOutModalStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 450px;
  height: 220px;
  padding: 10px 20px 20px;
  background-color: #fff;
  button {
    width: 120px;
    height: 50px;
    border-radius: 20px;
    background: #ff8b38;
    border: none;
    margin-top: 15px;

    color: #fff;
    font-size: 22px;
    font-weight: 600;
  }
`;
export const SoldOutCancelBt = styled.div`
  text-align: end;
  margin-bottom: 5px;
  img {
    width: 20px;
    cursor: pointer;
  }
`;
export const SoldOutTxtZone = styled.div`
  text-align: center;
  margin: 30px 0px;
`
export const SoldOutBtZone = styled.div`
display: flex;
justify-content: center;
gap: 30px;
`