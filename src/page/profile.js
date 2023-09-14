import React from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import BottomAppBar from "../components/Navbar/BottomAppBar";
import { Avatar, Card, CardContent, CardHeader, Divider, Typography } from "@mui/material";

const Profile = () => {
    const { user: currentUser } = useSelector((state) => state.auth);

    if (!currentUser) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="main">
            <div className="content">
                <Card sx={{ bgcolor: "whitesmoke", color: "black" }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: "darkblue" }} aria-label="Ava" >{currentUser.id}</Avatar>
                        }
                        title={
                            <Typography variant="h5" >
                                <strong>{currentUser.username} Profile.</strong>
                            </Typography>
                        }
                        subheader={currentUser.createAt}
                        titleTypographyProps={{ align: "center" }}
                    />
                    <CardContent>
                        <Typography component={"h5"} variant="h6" sx={{ alignContent: "center"}} >
                            <strong>ID : {currentUser.id} </strong>
                        </Typography>
                        <Typography component={"h5"} variant="h6" sx={{ alignContent: "center"}} >
                            <strong>Email : {currentUser.email} </strong>
                        </Typography>
                        <Divider/>
                        <Typography component={"h5"} variant="h6" sx={{ alignContent: "center"}} >
                            <strong>Authorities : </strong>
                        </Typography>
                        <Typography component={"h5"} variant="h6" sx={{ alignContent: "center"}} >
                            <strong> 
                                {currentUser.roles &&
                                currentUser.roles.map((role, index) => <li key={index}>{role}</li>)} 
                            </strong>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <BottomAppBar/>
        </div>
    );
};

export default Profile;