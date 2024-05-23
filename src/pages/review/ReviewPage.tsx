import React, { useState } from "react";
import {
  ReviewItem,
  ReviewStyle,
  SearchForm,
} from "../../styles/review/ReviewStyle.tsx";
import { PaginationOrange } from "../../styles/Pagination.tsx";

// 더미데이터
const reviewData = [
  {
    id: 1,
    title: "경대북문점 직원들 모두 너무 친절해요^_^ 치킨 냠냠 많이 먹으면 살이 쪄요ㅠㅠ 그치만 맛있어서 멈출수가 없지요",
    nick: "콩이",
    date: "2024.02.20",
  },
  {
    id: 2,
    title: "경대북문점 직원들 모두 너무 친절해요^_^",
    nick: "김그린",
    date: "2024.02.20",
  },
  {
    id: 3,
    title: "경대북문점 직원들 모두 너무 친절해요^_^",
    nick: "콩이",
    date: "2024.02.20",
  },
  {
    id: 4,
    title: "경대북문점 직원들 모두 너무 친절해요^_^",
    nick: "콩이",
    date: "2024.02.20",
  },
  {
    id: 5,
    title: "경대북문점 직원들 모두 너무 친절해요^_^",
    nick: "콩이",
    date: "2024.02.20",
  },
  {
    id: 6,
    title: "경대북문점 직원들 모두 너무 친절해요^_^",
    nick: "콩이",
    date: "2024.02.20",
  },
  {
    id: 7,
    title: "경대북문점 직원들 모두 너무 친절해요^_^",
    nick: "콩이",
    date: "2024.02.20",
  },
  {
    id: 8,
    title: "경대북문점 직원들 모두 너무 친절해요^_^",
    nick: "콩이",
    date: "2024.02.20",
  },
  {
    id: 9,
    title: "경대북문점 직원들 모두 너무 친절해요^_^",
    nick: "콩이",
    date: "2024.02.20",
  },
  {
    id: 10,
    title: "경대북문점 직원들 모두 너무 친절해요^_^",
    nick: "콩이",
    date: "2024.02.20",
  },
  {
    id: 11,
    title: "경대북문점 직원들 모두 너무 친절해요^_^",
    nick: "콩이",
    date: "2024.02.20",
  },
  {
    id: 12,
    title: "경대북문점 직원들 모두 너무 친절해요^_^",
    nick: "콩이",
    date: "2024.02.20",
  },
];

const ReviewPage = () => {
  const [search, setSearch] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");

  const [page, setPage] = useState<number>(1);
  // 페이지네이션
  const COMMENTS_PER_PAGE = 10;
  const handlePageChange = _tempPage => {
    setPage(_tempPage);
  };

  return (
    <>
      <ReviewStyle>
        <h1>&nbsp;&nbsp;리뷰 관리</h1>
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
        {reviewData.slice((page * COMMENTS_PER_PAGE) - 10 , page * COMMENTS_PER_PAGE).map(item => (
          <ReviewItem key={item.id}>
            <div style={{ width: "730px", display: "flex",paddingRight:"20px" }}>
              <p>{item.id}.</p>
              <p>{item.title}</p>
            </div>
            <span>{item.nick}</span>
            <button>댓글쓰기</button>
          </ReviewItem>
        ))}
        <div style={{ textAlign: "center", margin: "20px 0" }}>
            <PaginationOrange
              current={page}
              onChange={handlePageChange}
              total={reviewData.length}
              pageSize={10}
            />
          </div>
      </ReviewStyle>
    </>
  );
};

export default ReviewPage;
