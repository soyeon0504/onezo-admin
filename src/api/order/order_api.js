import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtAxios } from "../../util/jwtUtil";
import { SERVER_URL } from "../config";

const failPostDatas = () => {
  const navigate = useNavigate();
  navigate("/");
};

export const getOrderState = async (status) => {
  try {
    const url = `${SERVER_URL}/orders/store/${status}`;
    const res = await jwtAxios.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
    failPostDatas("/");
  }
};



// WaitComponent 주문 접수, 거부

export const putOrderAccept = async (orderId) => {
  try {
    const url = `${SERVER_URL}/orders/accept/${orderId}`
    const res = await jwtAxios.put(url, orderId);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const putOrderReject = async (orderId) => {
  try {
    const url = `${SERVER_URL}/orders/reject/${orderId}`
    const res = await jwtAxios.put(url, orderId);
    return res;
  } catch (error) {
    // idPostFail();
  }
};

// CookingComponent 주문 완료하기
export const putOrderComplete = async (orderId) => {
  try {
    const url = `${SERVER_URL}/orders/complete/${orderId}`
    const res = await jwtAxios.put(url, orderId);
    return res;
  } catch (error) {
    // idPostFail();
  }
};

// CompleteComponent 주문 취소
export const putOrderCancle = async (orderId) => {
  try {
    const url = `${SERVER_URL}/orders/cancle/${orderId}`
    const res = await jwtAxios.put(url, orderId);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// OrderSearchPage
export const getOrderAllList = async () => {
  try {
    const url = `${SERVER_URL}/orders/store`;
    const res = await jwtAxios.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
    // failPostDatas("/");
  }
};

export const deleteOrderList = async () => {
  try {
    const url = `${SERVER_URL}/auth/checkId`
    const res = await axios.delete();
    return res;
  } catch (error) {
    // idPostFail();
  }
};
