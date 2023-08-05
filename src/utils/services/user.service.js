import axios from "axios";

const API_URL = "http://localhost:3000/api/test/";

const getPublicContent = () => {
    return axios.get(API_URL + "all");
};

const getUserBoard = () => {
    return axios.get(API_URL + "siswa");
};

const getGuruBoard = () => {
    return axios.get(API_URL + "guru");
};

const getAdminBoard = () => {
    return axios.get(API_URL + "admin");
};

const UserService = {
    getPublicContent,
    getSiswaBoard,
    getGuruBoard,
    getAdminBoard,
}

export default UserService;