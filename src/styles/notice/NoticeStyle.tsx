import styled from "@emotion/styled";

export const Noticestyle = styled.div`
  width: 1080px;
  h1 {
    padding-bottom: 20px;
    border-bottom: 1px solid #000;

    color: #000;
    font-size: 24px;
    font-weight: 700;
  }
`;

export const NoticeInputForm = styled.form`
  width: 980px;
  height: 640px;
  border-radius: 10px;
  border: 1px solid #572a01;
  background: #fff;
  margin: 50px auto;
  padding: 60px 0 0 90px;
  div {
    display: flex;
    gap: 160px;
    margin-bottom: 20px;
  }
  span {
    color: #000;
    font-size: 16px;
    font-weight: 400;
    padding-top: 8px;
  }
`;
export const PhotoSection = styled.div`
  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
  img {
    width: 180px;
    height: 180px;
    object-fit: cover;
    border-radius: 5px;
    border: 1px solid #572a01;
  }
`;
export const TitleSection = styled.div`
  input {
    width: 600px;
    height: 36px;
    border-radius: 5px;
    border: 1px solid #572a01;
    background: #fff;
    padding-left: 10px;
  }
`;
export const ContentSection = styled.div`
  textarea {
    width: 600px !important;
    height: 200px;
    border-radius: 5px;
    border: 1px solid #572a01;
    background: #fff;
    padding: 10px;
    resize: none;
  }
`;
