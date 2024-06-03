import React, { useEffect, useState } from "react";
import {
    ReviewBtZone,
  ReviewCancelBt,
  ReviewModalStyle,
} from "../../styles/review/ReviewModalstyle";
import { putReview } from "../../api/review/review_api";

const ReviewConfirmModal = ({ reviewId, reply, onCloseModal }) => {
  // 데이터 연동(댓글 작성 & 수정)
  const [replyComment, setReplyComment] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>(reply);

  useEffect(() => {
    const putData = async () => {
      await putReview({ review_id: reviewId, reply: replyComment });
    };
    if (replyComment !== "") {
      putData();
    }
  }, [replyComment]);

  return (
    <ReviewModalStyle>
      <ReviewCancelBt>
        <img src="/images/review/bt_cancel.svg" onClick={onCloseModal} />
      </ReviewCancelBt>
      <p>리뷰</p>
      <textarea
        placeholder="댓글을 남겨주세요."
        value={inputValue}
        onChange={e => {
          const inputText = e.target.value;
          setInputValue(inputText);
        }}
      />
      <ReviewBtZone>
        <button  className="modifyBt" onClick={() => setReplyComment(inputValue)}>수정</button>
        <button>삭제</button>
      </ReviewBtZone>
    </ReviewModalStyle>
  );
};

export default ReviewConfirmModal;
