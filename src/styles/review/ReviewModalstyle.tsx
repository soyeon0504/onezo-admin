import styled from "@emotion/styled";

export const ReviewModalStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 500px;
  padding: 10px 20px 20px;
  background-color: #fff;
  p {
    color: #000;
    font-size: 20px;
    font-weight: 700;
    margin-top: -10px;
    margin-bottom: 15px;
  }
  textarea {
    margin-top: 15px;
    width: 460px;
    height: 160px;
    resize: none;
    border: 1px solid #d9d9d9;
    padding: 10px;

    font-size: 15px;
  }
  button {
    width: 120px;
    height: 50px;
    border-radius: 20px;
    background: #ff8b38;
    border: none;
    margin-top: 15px;
    cursor: pointer;

    color: #fff;
    font-size: 22px;
    font-weight: 600;
  }
`;
export const ReviewCancelBt = styled.div`
  text-align: end;
  margin-bottom: 5px;
  img {
    width: 20px;
    cursor: pointer;
  }
`;
export const ReviewBtZone = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  .modifyBt{
    background: #fff;
    color: #000;
    border: 1px solid #000;
  }
`;
