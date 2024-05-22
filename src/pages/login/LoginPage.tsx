import React from "react";
import {
  InputWrap,
  LoginBt,
  LoginFooter,
  LoginBox,
  LoginPageStyle,
  LogoZone,
  InputBox,
} from "../../styles/login/LoginStyle.tsx";

const LoginPage = () => {
  return (
    <>
      <LoginPageStyle>
        <LoginBox>
          <LogoZone>
            <img src="/images/logo.svg" />
          </LogoZone>
          <InputWrap>
            <InputBox>
              <img src="../../images/login/userId.svg" />
              <input
                type="text"
                maxLength={20}
                placeholder="아이디를 입력해주세요."
              ></input>
            </InputBox>
            <InputBox>
              <img src="../../images/login/pw.png" />
              <input
                type="password"
                maxLength={20}
                placeholder="비밀번호를 입력해주세요."
              ></input>
            </InputBox>
            <LoginBt>로그인</LoginBt>
          </InputWrap>
          <LoginFooter>
              <li>아이디 찾기</li>
              <hr />
              <li>비밀번호 찾기</li>
          </LoginFooter>
        </LoginBox>
      </LoginPageStyle>
    </>
  );
};

export default LoginPage;
