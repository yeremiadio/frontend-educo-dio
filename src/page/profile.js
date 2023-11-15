import React, { useState, useEffect } from "react";
import { Navigate } from 'react-router-dom';
import BottomAppBar from "../components/Navbar/BottomAppBar";
import { Avatar, Card, CardContent, CardHeader, Divider, Typography } from "@mui/material";
import { jwtDecode } from 'jwt-decode';
import axiosInstance from "../config/axiosInstance";

const Profile = () => {
    const [userInfo, setUserInfo] = useState(null);

    // Menggunakan localStorage untuk mendapatkan token akses
    const accessToken = localStorage.getItem('accessToken');

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                if (accessToken) {
                    // Mendekode token akses untuk mendapatkan informasi pengguna
                    const decodedToken = jwtDecode(accessToken);
                    const userId = decodedToken.id;

                    // Mendapatkan informasi pengguna berdasarkan ID pengguna yang login
                    const response = await axiosInstance.get(`/api/users/${userId}`, {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    });

                    setUserInfo(response.data.user);
                }
            } catch (error) {
                console.error('Error fetching user information:', error);
            }
        };

        fetchUserInfo();
    }, [accessToken]);

    if (!accessToken) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="main">
            <div className="content">
                {userInfo && (
                    <Card sx={{ bgcolor: "whitesmoke", color: "black" }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: "darkblue" }} aria-label="Ava" >{userInfo.id}</Avatar>
                            }
                            title={
                                <Typography variant="h5" >
                                    <strong>{userInfo.username} Profile.</strong>
                                </Typography>
                            }
                            subheader={userInfo.createdAt}
                            titleTypographyProps={{ align: "center" }}
                        />
                        <CardContent>
                            <Typography component={"h5"} variant="h6" sx={{ alignContent: "center"}} >
                                <strong>ID : {userInfo.id} </strong>
                            </Typography>
                            <Typography component={"h5"} variant="h6" sx={{ alignContent: "center"}} >
                                <strong>Email : {userInfo.email} </strong>
                            </Typography>
                            <Divider/>
                            <Typography component={"h5"} variant="h6" sx={{ alignContent: "center"}} >
                                <strong>Authorities : </strong>
                            </Typography>
                            <Typography component={"h5"} variant="h6" sx={{ alignContent: "center"}} >
                                <strong> 
                                    {userInfo.roles &&
                                    userInfo.roles.map((role, index) => <li key={index}>{role}</li>)} 
                                </strong>
                            </Typography>
                        </CardContent>
                    </Card>
                )}
            </div>
            <BottomAppBar/>
        </div>
    );
};

export default Profile;
