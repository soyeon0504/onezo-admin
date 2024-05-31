import styled from "@emotion/styled";

export const NoticeListStyle = styled.div`
  width: 1080px;
  h1 {
    padding-bottom: 20px;
    border-bottom: 1px solid #000;

    color: #000;
    font-size: 24px;
    font-weight: 700;
  }
`;
export const NoticeListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 15px;
  width: 1000px;
  border: 1px solid #d9d9d9;
  margin: 0 auto;
  p {
    font-size: 20px;
    font-weight: 600;
    padding: 10px 0;
    line-height: 30px;
    margin-right: 20px;
  }
  p:nth-of-type(1) {
    width: 35px;
  }
  p:nth-of-type(2) {
    width: 700px;
  }
  p:nth-of-type(3) {
    font-size: 14px;
    width: 160px;
    text-align: end;
  }
`;
export const NoticeRegisterBt = styled.div`
  width: 1000px;
  display: flex;
  justify-content: end;
  margin: 30px auto;
  button {
    width: 150px;
    height: 40px;
    background: #ff8b38;
    border: none;

    color: #fff;
    font-size: 18px;
    font-weight: 400;
  }
`;
