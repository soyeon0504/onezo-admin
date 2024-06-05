import styled from "@emotion/styled";

export const Salesstyle = styled.div`
  width: 1080px;
  h1 {
    padding-bottom: 20px;
    border-bottom: 1px solid #000;

    color: #000;
    font-size: 24px;
    font-weight: 700;
  }
  p {
    position: absolute;
    top: 100px;
    font-size: 12px;
  }
`;

export const SalesTableHeader = styled.div`
  width: 970px;
  margin: 0 auto 20px;
  display: flex;
  justify-content: end;
  span {
    color: #777;
    font-size: 18px;
    font-weight: 400;
    width: 180px;
    text-align: center;
  }
`;

export const SalesTable = styled.div`
  display: flex;
  width: 970px;
  margin: 0 auto;
  span {
    color: #000;
    font-size: 18px;
    font-weight: 400;
    margin: 8px 0px;
    width: 180px;
    text-align: center;
  }
  span:nth-of-type(1) {
    width: 50px;
  }
  span:nth-of-type(2) {
    width: 380px;
    text-align: start;
  }
`;
