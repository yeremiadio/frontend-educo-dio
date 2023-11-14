import { useSelector } from "react-redux";
import axiosInstance from "../../config/axiosInstance";

const API_URL = `/api/users/`;

const { user: currentUser } = useSelector((state) => state.auth);

const getPublicContent = () => {
  return axiosInstance.get(API_URL + currentUser.id);
};


const UserService = {
  getPublicContent,
};

export default UserService;
