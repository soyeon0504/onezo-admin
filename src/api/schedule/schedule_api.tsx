import axios from "axios";
import { SERVER_URL } from "../config";


export const postRegularHoliday = async () => {
    try {
      const url = `${SERVER_URL}/schedule/regularHoliday`;
      const res = await axios.post(url);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };