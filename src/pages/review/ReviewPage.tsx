import React, { useState } from "react";
import {
  ReviewItem,
  ReviewStyle,
  SearchForm,
} from "../../styles/review/ReviewStyle.tsx";
import { PaginationOrange } from "../../styles/Pagination.tsx";
import ReviewModal from "../../components/review/ReviewModal.tsx";
import { ModalBackground } from "../../styles/schedule/ScheduleModalStyle.tsx";

// 더미데이터
const reviewData = [
  {
    id: 1,
    title:
      "경대북문점 직원들 모두 너무 친절해요^_^ 치킨 냠냠 많이 먹으면 살이 쪄요ㅠㅠ 그치만 맛있어서 멈출수가 없지요",
    nick: "콩이",
    rating: 5,
    date: "2024.02.20",
  },
  {
    id: 2,
    title: "경대북문점 직원들 모두 너무 친절해요^_^",
    nick: "김그린",
    rating: 4,
    date: "2024.02.20",
  },
  {
    id: 3,
    title: "경대북문점 직원들 모두 너무 친절해요^_^",
    nick: "콩이",
    rating: 5,
    date: "2024.02.20",
  },
  {
    id: 4,
    title: "경대북문점 직원들 모두 너무 친절해요^_^",
    nick: "콩이",
    rating: 3,
    date: "2024.02.20",
  },
  {
    id: 5,
    title: "경대북문점 직원들 모두 너무 친절해요^_^",
    nick: "콩이",
    rating: 5,
    date: "2024.02.20",
  },
  {
    id: 6,
    title: "경대북문점 직원들 모두 너무 친절해요^_^",
    nick: "콩이",
    rating: 5,
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
    title: "경대북문점 직원들 모두 너무 친절해요^_^",
    nick: "콩이",
    rating: 5,
    date: "2024.02.20",
  },
  {
    id: 9,
    title: "경대북문점 직원들 모두 너무 친절해요^_^",
    nick: "콩이",
    rating: 5,
    date: "2024.02.20",
  },
  {
    id: 10,
    title: "경대북문점 직원들 모두 너무 친절해요^_^",
    nick: "콩이",
    rating: 5,
    date: "2024.02.20",
  },
  {
    id: 11,
    title: "경대북문점 직원들 모두 너무 친절해요^_^",
    nick: "콩이",
    rating: 5,
    date: "2024.02.20",
  },
  {
    id: 12,
    title: "경대북문점 직원들 모두 너무 친절해요^_^",
    nick: "콩이",
    rating: 5,
    date: "2024.02.20",
  },
];

const ReviewPage = () => {
  const [search, setSearch] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");

  const [page, setPage] = useState<number>(1);

  // 리뷰작성 모달창
  const [reviewModal, setReviewModal] = useState<boolean>(false);
  const handleReviewRegister = () => {
    setReviewModal(true);
  };
  const closeReviewRegister = () => {
    setReviewModal(false);
  };
  // 페이지네이션
  const COMMENTS_PER_PAGE = 10;
  const handlePageChange = _tempPage => {
    setPage(_tempPage);
  };

  return (
    <>
      {reviewModal && (
        <>
          <ReviewModal
            store="경대북문점"
            onCloseModal={closeReviewRegister}
          />
          <ModalBackground/>
        </>
      )}
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
        {reviewData
          .slice((page - 1) * COMMENTS_PER_PAGE, page * COMMENTS_PER_PAGE)
          .map(item => (
            <ReviewItem key={item.id}>
              <div>
                <p>{item.id}.</p>
                <p>{item.title}</p>
                <p>{item.rating}점</p>
              </div>
              <span>{item.nick}</span>
              <button onClick={handleReviewRegister}>댓글쓰기</button>
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
