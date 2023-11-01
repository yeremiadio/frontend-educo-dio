import axios from "axios";

const API_URL = "http://localhost:3000/api/auth/";

const saveCode = (code, userInput) => {
    return axios.post("http://localhost:3000/save-compile", {
        code,
        userInput,
    });
};

const register = (username, email, password, roles) => {
    return axios.post(API_URL + "signup", {
        username,
        email,
        password,
        roles,
    });
};

const login = (username, password) => {
    return axios
        .post(API_URL + "signin", {
        username,
        password,
        })
        .then((response) => {
        if (response.data.username) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
    });
};

const logout = () => {
    localStorage.removeItem("user");
    return axios.post(API_URL + "signout").then((response) => {
        return response.data;
    });
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const getCurrentCode = () => {
    return JSON.parse(localStorage.getItem("codes"));
};

const AuthService = {
    register,
    login,
    logout,
    saveCode,
    getCurrentUser,
    getCurrentCode,
}

export default AuthService;