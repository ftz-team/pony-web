import axios from "axios";
import { API } from "../../config";

export class AuthService {
  async login(username, password) {
    const endpoint = "/rest-auth/login/";

    try {
      const result = await axios.post(API + endpoint, { username, password });
      localStorage.setItem("token", "Token " + result.data["key"]);
      return result.status;
    } catch (error) {
      console.error(error);
      return error.status;
    }
  }

  async logout() {
    const endpoint = "/rest-auth/logout/";
    try {
      await axios
        .post(API + endpoint)
        .then(() => localStorage.removeItem("token"));
    } catch (error) {
      console.error(error);
    }
  }
}
