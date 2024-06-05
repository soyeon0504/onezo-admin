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
    title: "[경대북문점] 오픈 3주년 기념 음료 증정행사",
    date: "2024.06.20 ~ 2024.06.27",
  },
  {
    id: 2,
    title: "[경대북문점] 현충일 임시 휴무",
    date: "2024.06.06",
  },
  {
    id: 3,
    title: "[경대북문점] 매장 식사시 테이블당 3000원 할인 행사",
    date: "2024.06.01 ~ 2024.06.05",
  },
  {
    id: 4,
    title: "[경대북문점] 경북대 축제기간 음료 증정행사",
    date: "2024.05.21 ~ 2024.05.23",
  },
  {
    id: 5,
    title: "[경대북문점] 재오픈 기념 음료 증정행사",
    date: "2024.05.06 ~ 2024.05.12",
  },
  {
    id: 6,
    title: "[경대북문점] 리모데링 공사로 인한 휴무",
    date: "2024.04.22 ~ 2024.05.05",
  },
  {
    id: 7,
    title: "[경대북문점] 임시휴무 공지",
    date: "2024.03.20",
  },
  {
    id: 8,
    title: "[경대북문점] 설연휴 휴무 공지",
    date: "2024.02.09 ~ 2024.02.12",
  },
  {
    id: 9,
    title: "[경대북문점] 신년 행사",
    date: "2024.01.01 ~ 2024.01.07",
  },
  {
    id: 10,
    title: "[경대북문점] 크리스마스 매장 식사시 테이블당 3000원 할인 행사",
    date: "2023.12.25",
  },
  {
    id: 11,
    title: "[경대북문점] 추석연휴 휴무 공지",
    date: "2023.09.28 ~ 2023.09.30",
  },
  {
    id: 12,
    title: "[경대북문점] 오픈 2주년 기념 음료 증정행사",
    date: "2023.06.20 ~ 2023.06.27",
  },
  {
    id: 13,
    title: "[경대북문점] 현충일 임시 휴무",
    date: "2023.06.06",
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
    window.scrollTo(0, 0);
  };

  // 페이지네이션
  const COMMENTS_PER_PAGE = 10;
  const handlePageChange = _tempPage => {
    setPage(_tempPage);
    window.scrollTo(0, 0);
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
