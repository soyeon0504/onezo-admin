import React, { useEffect, useState } from "react";
import {
  ReviewItem,
  ReviewStyle,
  SearchForm,
} from "../../styles/review/ReviewStyle.tsx";
import { PaginationOrange } from "../../styles/Pagination.tsx";
import ReviewModal from "../../components/review/ReviewModal.tsx";
import { ModalBackground } from "../../styles/schedule/ScheduleModalStyle.tsx";
import { getReview, putReview } from "../../api/review/review_api.js";
import { useSelector } from "react-redux";
import ReviewConfirmModal from "../../components/review/ReviewConfirmModal.tsx";

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
  const [data, setData] = useState(null);
  const [search, setSearch] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");

  const [page, setPage] = useState<number>(1);

  // store_id 값
  // const store_id = useSelector(state => state.loginSlice.storeId);
  const store_id = 14;

  // 데이터 연동(리뷰조회)
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getReview(store_id);
        setData(res);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  // 데이터 연동(댓글 작성 & 수정)
  const [reviewId, setReviewId] = useState<number>(0);
  const [reply, setReply] = useState<string>("");

  // 리뷰작성 모달창
  const [reviewModal, setReviewModal] = useState<boolean>(false);
  const [reviewComfirmModal, setReviewComfirmModal] = useState<boolean>(false);
  const handleReviewRegister = reviewId => {
    setReviewId(reviewId);
    setReviewModal(true);
  };
  const closeReviewRegister = () => {
    setReviewModal(false);
  };
  const handleReviewComfirm = (reviewId, reply) => {
    setReviewId(reviewId);
    setReply(reply);
    setReviewComfirmModal(true);
  };
  const closeReviewComfirm = () => {
    setReviewComfirmModal(false);
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
          <ReviewModal reviewId={reviewId} onCloseModal={closeReviewRegister} />
          <ModalBackground />
        </>
      )}
      {reviewComfirmModal && (
        <>
          <ReviewConfirmModal
            reviewId={reviewId}
            reply={reply}
            onCloseModal={closeReviewComfirm}
          />
          <ModalBackground />
        </>
      )}
      <ReviewStyle>
        <h1>&nbsp;&nbsp;리뷰 관리</h1>
        {/* <SearchForm>
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
        </SearchForm> */}
        {data
          ?.slice((page - 1) * COMMENTS_PER_PAGE, page * COMMENTS_PER_PAGE)
          .map((item, index) => (
            <ReviewItem key={index}>
              <div>
                <p>{index + 1}.</p>
                <p>{item.comment}</p>
                <p>{item.star}점</p>
              </div>
              <span>{item.nickname}</span>
              {!item.reply ? (
                <button onClick={() => handleReviewRegister(item.review_id)}>
                  댓글쓰기
                </button>
              ) : (
                <button
                  onClick={() =>
                    handleReviewComfirm(item.review_id, item.reply)
                  }
                >
                  댓글보기
                </button>
              )}
            </ReviewItem>
          ))}
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <PaginationOrange
            current={page}
            onChange={handlePageChange}
            total={data?.length}
            pageSize={10}
          />
        </div>
      </ReviewStyle>
    </>
  );
};

export default ReviewPage;
