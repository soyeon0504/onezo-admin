import { jwtAxios } from "../../util/jwtUtil";
import { SERVER_URL } from "../config";

// 메뉴 조회
export const getMenu = async (menu_category) => {
  try {
    const url = `${SERVER_URL}/menu/soldOut/select/${menu_category}`;

    const res = await jwtAxios.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// 메뉴 품절상태 변경
export const soldOutMenu = async (menu_id) => {
  try {
    const url = `${SERVER_URL}/menu/soldOut/update/${menu_id}`
    
    const res = await jwtAxios.put(url);
    return res;
  } catch (error) {
    console.log(error)
  }
}