import React from "react";
import Layout from "../../layouts/Layout";
import { useNavigate } from "react-router-dom";
import {
  InfoHeader,
  InfoMain,
  MainInfo,
  MainLink,
  MainPageStyle,
} from "../../styles/main/MainStyle.tsx";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <MainPageStyle>
        <MainInfo>
          <InfoHeader>
            <img src="/images/main/user.png" />
            <p>경대북문점</p>
          </InfoHeader>
          <InfoMain>
            <p>주소 : 대구 북구 대학로 80</p>
            <p>연락처 : 053)123-4567</p>
          </InfoMain>
        </MainInfo>
        <MainLink>
          <button onClick={() => navigate("/admin/order_management")}>
            <img src="/images/main/order_management.png" />
            <p>주문 관리</p>
          </button>
          <button onClick={() => navigate("/admin/order_search")}>
            <img src="/images/main/order_search.png" />
            <p>주문 조회</p>
          </button>
          <button onClick={() => navigate("/admin/schedule")}>
            <img src="/images/main/schedule.png" />
            <p>일정 관리</p>
          </button>
          <button onClick={() => navigate("/admin/soldout")}>
            <img src="/images/main/soldout.svg" />
            <p>메뉴 품절</p>
          </button>
          <button onClick={() => navigate("/admin/review")}>
            <img src="/images/main/review.svg" />
            <p>리뷰 관리</p>
          </button>
          <button onClick={() => navigate("/admin/sales")}>
            <img src="/images/main/sales.png" />
            <p>매출 관리</p>
          </button>
          <button onClick={() => navigate("/admin/notice")}>
            <img src="/images/main/notice.png" />
            <p>공지 관리</p>
          </button>
        </MainLink>
      </MainPageStyle>
    </Layout>
  );
};

export default MainPage;
