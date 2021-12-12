import axios from "axios";
import { API } from "../../config";

export class UserService {
  async getData() {
    const endpoint = "/user/data/";
    const token = localStorage.getItem("token");

    try {
      const result = await axios.get(API + endpoint, {
        headers: { Authorization: token },
      });
      return result.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
