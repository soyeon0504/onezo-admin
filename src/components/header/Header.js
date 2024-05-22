import React from "react";
import styled from "@emotion/styled";

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
`;

const Header = () => {
  return (
    <Wrap>
      <InnerWrap>
        <a href="/main">
          <img src="../../images/logo.svg" />
        </a>
      </InnerWrap>
    </Wrap>
  );
};

export default Header;
