import axios from "axios";
import { API_BASE_ENDPOINT } from "../utils/common";

// Create an instance of Axios with custom configuration
const axiosInstance = axios.create({
  baseURL: API_BASE_ENDPOINT, // Set your base URL
  //   headers: {
  //     "Content-Type": "application/json",
  //     // You can add other default headers here
  //   },
});

export default axiosInstance;
