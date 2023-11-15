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

const login = async (email, password) => {
  return await axiosInstance
    .post(API_URL + "signin", {
      email,
      password,
    })
    .then((response) => {
      if (!!response?.data) {
        /**
         * @description sesuaikan response data dari backend
         * @example const responseUserJson = {
            "username": "hadiwardana",
            "email": "yeremiadio@gmail.com",
            "id": 1,
            "createdAt": "2023-11-15T13:03:52.423Z",
            "updatedAt": "2023-11-15T13:03:52.423Z",
            "roleId": 1,
            "accessToken": "ey..."
          }
         */
        localStorage.setItem("userId", response.data.id);
        localStorage.setItem("token", response.data.accessToken);
      }

      return response.data;
    });
};

const logout = async () => {
  localStorage.removeItem("token");
  return await axiosInstance.post(API_URL + "signout").then((response) => {
    return response.data;
  });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("token"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
