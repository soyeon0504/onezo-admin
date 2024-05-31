import axios from "axios";
import { SERVER_URL } from "../config";

const failPostDatas = () => {
    const navigate = useNavigate();
    navigate("/");
  };

export const getOrderAllList = async () => {
    try {
      const url = `${SERVER_URL}/orders/store`;
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      console.log(error);
      failPostDatas("/");
    }
  };