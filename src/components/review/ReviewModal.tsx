import React, { useState } from "react";
import { ReviewCancelBt, ReviewModalStyle, ReviewOrder } from "../../styles/review/ReviewModalstyle";

const ReviewModal = ({ store, onCloseModal }) => {
  return (
    <ReviewModalStyle>
      <ReviewCancelBt>
        <img src="/images/review/bt_cancel.svg" onClick={onCloseModal} />
      </ReviewCancelBt>
      <p>리뷰</p>
      <ReviewOrder>
        <img src="/images/chicken.jpg" />
        <div>
          <h1>[{store}]</h1>
          <h2>핫황금올리브치킨™크리스피 외 2개</h2>
        </div>
      </ReviewOrder>
      <textarea placeholder="댓글을 남겨주세요." />
      <div style={{ textAlign: "center" }}>
        <button>작성완료</button>
      </div>
    </ReviewModalStyle>
  );
};

export default ReviewModal;
