import { jwtAxios } from "../../util/jwtUtil";
import { SERVER_URL } from "../config";

// 메뉴 조회
export const getMenu = async menu_category => {
  try {
    const url = `${SERVER_URL}/menu/soldOut/select/${menu_category}`;

    const res = await jwtAxios.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// 메뉴 품절상태 변경
export const soldOutMenu = async ({ menu_id, sold_out_yn }) => {
  try {
    const url = `${SERVER_URL}/menu/soldOut/update/${menu_id}`;

    const res = await jwtAxios.put(url, { sold_out_yn });
    return res;
  } catch (error) {
    console.log(error);
  }
};
