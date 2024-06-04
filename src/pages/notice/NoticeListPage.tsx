import React, { useState } from "react";
import {
  NoticeListItem,
  NoticeListStyle,
  NoticeRegisterBt,
} from "../../styles/notice/NoticeListStyle";
import { SearchForm } from "../../styles/review/ReviewStyle";
import { PaginationOrange } from "../../styles/Pagination";
import { useNavigate } from "react-router-dom";

// 더미데이터
const NoticeListData = [
  {
    id: 1,
    title: "경대북문점 1주년 기념 음료 증정행사",
    date: "2024.05.20 ~ 2024.05.27",
  },
  {
    id: 2,
    title: "경대북문점 1주년 기념 음료 증정행사",
    date: "2024.05.20 ~ 2024.05.27",
  },
  {
    id: 3,
    title: "경대북문점 1주년 기념 음료 증정행사",
    date: "2024.05.20 ~ 2024.05.27",
  },
  {
    id: 4,
    title: "경대북문점 1주년 기념 음료 증정행사",
    date: "2024.02.20",
  },
  {
    id: 5,
    title: "경대북문점 1주년 기념 음료 증정행사",
    date: "2024.02.20",
  },
  {
    id: 6,
    title: "경대북문점 1주년 기념 음료 증정행사",
    date: "2024.02.20",
  },
  {
    id: 7,
    title: "경대북문점 직원들 모두 너무 친절해요^_^",
    nick: "콩이",
    rating: 5,
    date: "2024.02.20",
  },
  {
    id: 8,
    title: "경대북문점 1주년 기념 음료 증정행사",
    date: "2024.02.20",
  },
  {
    id: 9,
    title: "경대북문점 1주년 기념 음료 증정행사",
    date: "2024.02.20",
  },
  {
    id: 10,
    title: "경대북문점 1주년 기념 음료 증정행사",
    date: "2024.02.20",
  },
  {
    id: 11,
    title: "경대북문점 1주년 기념 음료 증정행사",
    date: "2024.02.20",
  },
  {
    id: 12,
    title: "경대북문점 임시휴무일 공지",
    date: "2024.02.20",
  },
];

const NoticeListPage = () => {
  const [search, setSearch] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");

  const [page, setPage] = useState<number>(1);

  // 페이지 이동
  const navigate = useNavigate();
  const moveToNoticeRegister = () => {
    navigate("/admin/notice/register");
  };

  // 페이지네이션
  const COMMENTS_PER_PAGE = 10;
  const handlePageChange = _tempPage => {
    setPage(_tempPage);
  };

  return (
    <NoticeListStyle>
      <h1>&nbsp;&nbsp;공지 목록</h1>
      <SearchForm>
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyPress={e => {
            if (e.key === "Enter") {
              e.preventDefault();
              setSearch(inputValue);
            }
          }}
        ></input>
        <button type="button" onClick={() => setSearch(inputValue)}></button>
      </SearchForm>
      {NoticeListData.slice(
        (page - 1) * COMMENTS_PER_PAGE,
        page * COMMENTS_PER_PAGE,
      ).map(item => (
        <NoticeListItem key={item.id}>
          <p>{item.id}.</p>
          <p>{item.title}</p>
          <p>{item.date}</p>
        </NoticeListItem>
      ))}
      <NoticeRegisterBt>
        <button onClick={moveToNoticeRegister}>글쓰기</button>
      </NoticeRegisterBt>
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <PaginationOrange
          current={page}
          onChange={handlePageChange}
          total={NoticeListData.length}
          pageSize={10}
        />
      </div>
    </NoticeListStyle>
  );
};

export default NoticeListPage;
