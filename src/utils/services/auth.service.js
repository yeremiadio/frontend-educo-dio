import axiosInstance from "../../config/axiosInstance";

const API_URL = `/api/auth/`;

const register = (username, email, password, roleId) => {
  return axiosInstance.post(API_URL + "signup", {
    username,
    email,
    password,
    roleId,
  });
};

const login = (email, password) => {
  return axiosInstance
    .post(API_URL + "signin", {
      email,
      password,
    })
    .then((response) => {
      if (response.data) {
        localStorage.setItem("accessToken", response.data.accessToken);
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("accessToken");
  return axiosInstance.post(API_URL + "signout").then((response) => {
    return response.data;
  });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("accessToken"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
