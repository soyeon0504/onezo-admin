import styled from "@emotion/styled";

export const ReviewStyle = styled.div`
  width: 1080px;
  h1 {
    padding-bottom: 20px;
    border-bottom: 1px solid #000;

    color: #000;
    font-size: 24px;
    font-weight: 700;
  }
`;

export const SearchForm = styled.div`
  margin-left: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 230px;
  height: 35px;
  padding: 0 10px;
  border: 1px solid #bebebe;
  border-radius: 5px;
  margin-bottom: 20px;
  input {
    border: none;
    width: 180px;
    height: 30px;
    font-size: 16px;
    font-weight: 400;
  }
  button {
    width: 16px;
    height: 16px;
    background-image: url("/images/review/bt_search.svg");
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const ReviewItem = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 15px;
  width: 1000px;
  border: 1px solid #d9d9d9;
  margin: 0 auto;
  div {
    width: 720px;
    display: flex;
  }
  p {
    font-size: 20px;
    font-weight: 600;
    padding: 10px 0;
    line-height: 30px;
    margin-right: 20px;
  }
  p:nth-of-type(2) {
    width: 600px;
  }
  span {
    width: 140px;
    color: #777;
    font-size: 20px;
  }
  button {
    width: 90px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #555;
    background: #fff;

    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
  }
`;
