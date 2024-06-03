import { jwtAxios } from "../../util/jwtUtil";
import { SERVER_URL } from "../config";

// 리뷰 조회
export const getReview = async store_id => {
  try {
    const url = `${SERVER_URL}/review/select/${store_id}`;

    const res = await jwtAxios.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// 댓글 작성 & 수정
export const putReview = async ({ review_id, reply }) => {
  try {
    const url = `${SERVER_URL}/review/reply/update/${review_id}`;

    const res = await jwtAxios.put(url, { reply });

    window.location.reload();
    return res;
  } catch (error) {
    console.log(error);
  }
};

// 댓글 삭제
export const deleteReview = async review_id => {
  try {
    const url = `${SERVER_URL}/review/reply/delete/${review_id}`;

    const res = await jwtAxios.put(url, { replyDelete_yn });
    return res;
  } catch (error) {
    console.log(error);
  }
};
