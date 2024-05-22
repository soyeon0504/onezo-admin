import styled from "@emotion/styled";

export const LoginPageStyle = styled.div`
  height: 1300px;
  margin: 0 auto;
`;

export const LoginBox = styled.div`
  margin: 0 auto;
  width: 500px;
  height: 600px;
  border: 1px solid #bcbbbb;
  border-radius: 15px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);

  text-align: center;
  /* padding-top: 100px; */
  /* display: flex; */
  /* align-items: center; */
  /* flex-direction: column; */
  /* justify-content: space-evenly; */
`;

export const LogoZone = styled.div`
  width: 100%;
  text-align: center;
  margin: 70px auto 50px auto;
`;

export const InputWrap = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const InputBox = styled.div`
  display: flex;
  width: 340px;
  height: 60px;
  border: 1px solid #cbcbcb;
  border-radius: 15px;
  img {
    margin: 7px 8px 0 8px;
    width: 45px;
    height: 45px;
  }
  input {
    width: 250px;
    border: none;
    font-size: 18px;
  }
`;

export const LoginBt = styled.button`
  width: 340px;
  height: 60px;
  border: 1px solid #ff8b38;
  border-radius: 15px;
  background-color: #ff8b38;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  font-weight: 500;
  margin-bottom: 45px;
`;

export const LoginFooter = styled.div`
  width: 340px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  color: #a9a7a7;
  li {
    cursor: pointer;
    font-size: 13px;
    list-style: none;
  }
  hr {
    width: 15px;
    transform: rotate(90deg);
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
