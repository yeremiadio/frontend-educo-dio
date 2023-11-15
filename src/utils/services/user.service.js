import axiosInstance from "../../config/axiosInstance";

const API_URL = `/api/users/`;

const getUserById = ({ id }) => {
  const token = localStorage.getItem("token");
  return axiosInstance.get(API_URL + id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const UserService = {
  getUserById,
};

export default UserService;
