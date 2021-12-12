import axios from "axios";
import { API } from "../../config";

export class EventService {
  async getEvents(search = "") {
    const endpoint = "/events/get/?search=" + search.toString();
    try {
      const result = await axios.get(API + endpoint);
      return result.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
