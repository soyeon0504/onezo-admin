import styled from "@emotion/styled";

export const SoldOutstyle = styled.div`
  width: 1080px;
  h1 {
    padding-bottom: 20px;
    border-bottom: 1px solid #000;

    color: #000;
    font-size: 24px;
    font-weight: 700;
  }
`;

export const CateSelect = styled.div`
  margin-left: 850px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 35px;
  border: 1px solid #bebebe;
  border-radius: 5px;
  margin-bottom: 20px;
  select {
    width: 160px;
    border: none;
    cursor: pointer;
  }
`;
export const SoldOutMenuWrap = styled.div`
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  column-gap: 20px;
  margin: 0 auto;
  /* background: beige; */
`;
export const SoldOutMenuItem = styled.div`
  display: flex;
  align-items: center;
  width: 490px;
  height: 120px;
  gap: 20px;
  border: 1px solid #d9d9d9;
  padding: 0 20px;
  img {
    width: 80px;
    height: 80px;
  }
  p {
    width: 260px;
    color: #000;
    font-size: 20px;
    font-weight: 600;
  }
  button {
    width: 110px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid #555;
    background: #FFF;
    cursor: pointer;

    color: #000;
    font-size: 20px;
    font-weight: 600;
  }
  .soldout{
    border: 1px solid red;
    color: red
  }
`;
