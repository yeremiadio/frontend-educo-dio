import React, { createContext, useContext, useEffect, useState } from 'react';
import axiosInstance from '../config/axiosInstance';

const UserContext = createContext(); //Context baru untuk pengelolaan data pengguna

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        
        setTimeout(() => {
            const Data = () => {
                return axiosInstance.get('/api/users/:id')
            };
            setUserData(Data);
        }, 1000);
    }, []);

    //Fungsi untuk memperbarui Data
    const updateUserData =(newData) => {
        setUserData(newData);
    };

    return (
        <UserContext.Provider
            value={{ userData, setUserData, updateUserData}}
        >
            {children}
        </UserContext.Provider>
    );
};

//Hook untuk mengakses konteks data pengguna
export const useUserContext = () => {
    return useContext(UserContext);
};