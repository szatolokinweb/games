import axios from "axios";
import * as constants from "../constants";

const api = axios.create({
  baseURL: constants.API_BASE_URL,
  params: {
    key: constants.API_KEY,
  },
});
