import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtAxios } from "../../util/jwtUtil";
import { SERVER_URL } from "../config";

const failPostDatas = () => {
  const navigate = useNavigate();
  navigate("/");
};

export const getOrderState = async () => {
  try {
    const url = `${SERVER_URL}/orders/status`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
    failPostDatas("/");
  }
};



// WaitComponent 주문 접수, 거부
export const idOverlapPost = async (userId) => {
  try {
    const url = `${SERVER_URL}/auth/checkId`
    const res = await axios.post(url, userId);
    return res;
  } catch (error) {
    // idPostFail();
  }
};

export const putOrderAccept = async (orderId) => {
  try {
    const url = `${SERVER_URL}/orders/accept/${orderId}`
    const res = await jwtAxios.put(url, orderId);
    return res;
  } catch (error) {
    // idPostFail();
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
