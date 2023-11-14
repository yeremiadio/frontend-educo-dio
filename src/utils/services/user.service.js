import axiosInstance from "../../config/axiosInstance";

const API_URL = `/api/users/`;

const getPublicContent = () => {
  return axiosInstance.get(API_URL + ":id");
};


const UserService = {
  getPublicContent,
};

export default UserService;
