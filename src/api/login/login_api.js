import axios from "axios";
import { SERVER_URL } from "../config";

const path = `${SERVER_URL}/user/login`;

// 로그인
export const loginPost = async ({ loginParam, successFn, failFn, errorFn }) => {
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const data = {
      email: loginParam.email,
      password: loginParam.password,
    };
    //     const res = await axios.post(`${path}`, data, header);
    //     const status = res.status.toString();

    //     if (status.charAt(0) === "2") {
    //       successFn(res.data);

    //       return res.data;
    //     } else {
    //       failFn("로그인에 실패하였습니다. 다시 시도해주세요.");
    //     }
    //   } catch (error) {
    //     const res = error.response;
    //     errorFn(res.message);
    //   }
    // };
    const response = await axios.post(`${path}`, data, header);
    if (response && response.status < 400) {
      successFn(response.data);
      return response.data;
    } else {
      failFn("problem");
    }
  } catch (error) {
    errorFn(error);
  }
};