import axios from "axios";
import { SERVER_URL } from "../config";

// 메뉴 조회
export const getMenu = async (store_id) => {
  try {
    const url = `${SERVER_URL}/menu/soldOut/select/${store_id}`;

    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};