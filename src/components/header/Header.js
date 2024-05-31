import React from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import useCustomLogin from "../../hooks/useCustomLogin";

const Wrap = styled.div`
  position: fixed;
  margin: 0 auto;
  width: 100vw;
  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.1);
  z-index: 999;
  background-color: #fff;
`;
const InnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1300px;
  height: 110px;
  margin: 0 auto;
  align-items: center;
  button {
    border: none;
    background: transparent;
    font-size: 16px;
  }
`;

const Header = () => {
  // 로그인 & 로그아웃
  const loginState = useSelector(state => state.loginSlice);
  const { moveToPath, isLogin, doLogout, userAuth } = useCustomLogin();

  const dispatch = useDispatch();
  const handleLogout = () => {
    doLogout();
    moveToPath("/");
  };
  return (
    <Wrap>
      <InnerWrap>
        <a href="/main">
          <img src="../../images/logo.svg" />
        </a>
        {isLogin ? <button onClick={handleLogout}>로그아웃</button>:<></>}
      </InnerWrap>
    </Wrap>
  );
};

export default Header;
