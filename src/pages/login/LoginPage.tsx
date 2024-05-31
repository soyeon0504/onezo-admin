import React, { useState } from "react";
import {
  InputWrap,
  LoginBt,
  LoginFooter,
  LoginBox,
  LoginPageStyle,
  LogoZone,
  InputBox,
} from "../../styles/login/LoginStyle.tsx";
import Layout from "../../layouts/Layout.js";
import { useDispatch } from "react-redux";
import useCustomLogin from "../../hooks/useCustomLogin.js";

// 초기값
const initState = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const [loginParam, setLoginParam] = useState(initState);
  const handleChange = e => {
    loginParam[e.target.name] = e.target.value;
    setLoginParam({ ...loginParam });
  };
  // 커스터훅 사용하기
  const { doLogin, moveToPath } = useCustomLogin();


  const dispatch = useDispatch();
  const handleClick = () => {
    // loginSlice 의  state 업데이트
    doLogin({ loginParam, successFn, failFn, errorFn });
  };
  const successFn = result => {
    console.log("성공", result);
    moveToPath("/main");
  };

  const failFn = result => {
    console.log("실패", result);
    alert("이메일 및 비밀번호 확인하세요.");
  };

  const errorFn = result => {
    console.log("서버 에러", result);
  };

  return (
    <Layout>
      <LoginPageStyle>
        <LoginBox>
          <LogoZone>
            <img src="/images/logo.svg" />
          </LogoZone>
          <InputWrap>
            <InputBox>
              <img src="../../images/login/userId.svg" />
              <input
                type="email"
                name="email"
                value={loginParam.email}
                onChange={e => handleChange(e)}
                maxLength={20}
                placeholder="아이디를 입력해주세요."
              ></input>
            </InputBox>
            <InputBox>
              <img src="../../images/login/pw.png" />
              <input
                type="password"
                name="password"
                value={loginParam.password}
                onChange={e => handleChange(e)}
                maxLength={20}
                placeholder="비밀번호를 입력해주세요."
              ></input>
            </InputBox>
            <LoginBt onClick={handleClick}>로그인</LoginBt>
          </InputWrap>
          <LoginFooter>
            <li>아이디 찾기</li>
            <hr />
            <li>비밀번호 찾기</li>
          </LoginFooter>
        </LoginBox>
      </LoginPageStyle>
    </Layout>
  );
};

export default LoginPage;
