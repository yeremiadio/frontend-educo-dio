import React, { useState } from "react";
import InputTextMassege from "../components/TextFields/InputTextField";
import { Avatar, Box, Container, ThemeProvider, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import Buttons from "../components/Buttons/Button";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import AlertMasseges from "../components/AlertMassege/AlertMassege";
import { useNavigate } from "react-router-dom";
import { theme } from "../utils/ThemeProvider";
import Copyright from "../utils/Copyright"; 

function HalamanLogin(params){
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isSuccess, setisSuccess] = useState(false);
    const [isError, setisError] = useState(false);

    let navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        console.log("data email", data.get("email"));
        console.log("data password", data.get("password"));
        
        const email = data.get("email");
        const password = data.get("password");

        if (email === "hadiwardana90@gmail.com" && password === "putra1927") {
        setisSuccess(true);

        const urlStateParam = {
            user : "Hadi",
            fullName : "Hadi Wardana Putra",
            email: email,
            token: true,
        }

        return navigate ("/dashboard", {
            state: urlStateParam,
        });
        } else {
            setisError(true);
        }
    }

    const handleClose = () => {
        setisSuccess(false);
        setisError(false);
    }

    return (
    <div className="main">
        <div className="overlay"></div>
        <div className="content">
            <ThemeProvider theme={theme}>
            <Container maxWidth="xs" sx={{bgcolor: "Background", }}>
                <Box sx={{
                    margin: 2,
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    }}
                    component="form"
                    onSubmit={handleSubmit}
                >
                <Avatar variant="outline">
                    <LockIcon />
                </Avatar>
                <Typography component={"h1"} variant="h5" color="ActiveCaption">
                    Sign In
                </Typography>
                <InputTextMassege 
                    id="email"
                    label="Email Address"
                    variant="outlined"
                    fullWidth
                    required
                    margin="normal"
                    name="email"
                    type="text"
                    
                />
                <div style={{ display: "flex", width: "100%", position: "relative" }}>
                    <InputTextMassege 
                        id="password"
                        label="Password"
                        variant="outlined"
                        fullWidth
                        required
                        margin="normal"
                        name="password"
                        type={isShowPassword ? "text" : "password"}
                    />
                    <div style={{ position: "absolute", right: 15, top: 33, cursor: "pointer" }}
                        onClick={() => setIsShowPassword(!isShowPassword)}
                    >
                        {isShowPassword ? (
                            <VisibilityOff fontSize="small" />
                        ) : (
                            <Visibility fontSize="small" />
                        )}
                    </div>
                </div>
                
                <AlertMasseges 
                    label="Your Email an Password is Correct"
                    open={isSuccess}
                    severity="success"
                    onClose={handleClose}
                />
                <AlertMasseges 
                    label="Your Email an Password is Error"
                    open={isError}
                    severity="error"
                    onClose={handleClose}
                />
                <Buttons 
                    type="submit"
                    variant="contained"
                    fullWidth
                    label="Sign In"
                />
                <Copyright 
                    variant="body2"
                    color="ActiveCaption"
                    align="center"
                />
                </Box>
            </Container>
            </ThemeProvider>
        </div>
    </div>
    )
}
export default HalamanLogin