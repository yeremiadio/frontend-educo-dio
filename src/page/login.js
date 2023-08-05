import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Avatar, Button, Container, TextField, ThemeProvider, Typography } from "@mui/material";

import { login } from "../utils/slices/auth";
import { clearMessage } from "../utils/slices/message";
import { theme } from "../utils/ThemeProvider";
import { Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import Copyright from "../utils/Copyright";

const validationSchema = Yup.object().shape({
    username: Yup
    .string("Enter your Username!")
    .required("This field is required!"),
    password: Yup
    .string("Enter your Password!")
    .min(6, "Password minimum 8 character!")
    .required("This field is required!"),
});

const Login = () => {
    let navigate = useNavigate();

    const [isShowPassword, setIsShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const { isLoggedIn } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    const formik = useFormik({
        initialValues : {
            username: "",
            password: "",
        },
        validationSchema : validationSchema,
        onSubmit : (values) => {
            const { username, password } = values;
            setLoading(true);
    
            dispatch(login({ username, password }))
            .unwrap()
            .then(() => {
                navigate("/dashboard");
                window.location.reload();
            })
            .catch(() => {
                setLoading(false);
            });
        },
    });

    if (isLoggedIn) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <div className="main"> 
            <div className="content">
                <ThemeProvider theme={theme}>
                    <Container  maxWidth="xs" sx={{ bgcolor: "Background", alignContent: "center" }}>
                    <Avatar variant="outline" sx={{ margin: 2}} >
                        <Lock />
                    </Avatar>
                    <Typography component={"h1"} variant="h5" color="ActiveCaption">
                        Sign In
                    </Typography>
                        <form onSubmit={formik.handleSubmit} style={{alignItems: "center", margin: 2 }}>
                            <TextField 
                                fullWidth
                                id="username"
                                name="username"
                                label="Username"
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.username && Boolean(formik.errors.username)}
                                helperText={formik.touched.username && formik.errors.username}
                                sx={{margin: 2}}
                            />
                            <div style={{ display: "flex", width: "100%", position: "relative" }}>
                                <TextField 
                                    fullWidth
                                    id="password"
                                    name="password"
                                    label="Password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                    type={isShowPassword ? "text" : "password"} 
                                    sx={{marginTop: 2, marginLeft: 2, marginBottom: 2}}
                                />
                                <div style={{ position: "absolute", right: 20, top: 33, cursor: "pointer" }}
                                    onClick={() => setIsShowPassword(!isShowPassword)} 
                                >
                                    {isShowPassword ? (
                                        <VisibilityOff fontSize="medium" color="action" />
                                    ) : (
                                        <Visibility fontSize="medium" color="action" />
                                    )}
                                </div>
                            </div>
                            <Button fullWidth type="submit" variant="contained" disabled={loading} sx={{margin: 2}}>Sign In</Button>
                        </form>
                        <Copyright 
                            variant="body2"
                            color="ActiveCaption"
                            align="center"
                        />
                    </Container>
                </ThemeProvider>
            </div>
        </div>
    );
};

export default Login;