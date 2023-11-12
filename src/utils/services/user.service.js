import axiosInstance from "../../config/axiosInstance";

const API_URL = `/api/test/`;

const getPublicContent = () => {
  return axiosInstance.get(API_URL + "all");
};

const getSiswaBoard = () => {
  return axiosInstance.get(API_URL + "siswa");
};

const getGuruBoard = () => {
  return axiosInstance.get(API_URL + "guru");
};

const getAdminBoard = () => {
  return axiosInstance.get(API_URL + "admin");
};

const UserService = {
  getPublicContent,
  getSiswaBoard,
  getGuruBoard,
  getAdminBoard,
};

export default UserService;
