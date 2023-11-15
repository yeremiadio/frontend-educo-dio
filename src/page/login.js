// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
import { Avatar, Button, Container, TextField, ThemeProvider, Typography } from "@mui/material";
// import { login } from "../utils/slices/auth";
// import { clearMessage } from "../utils/slices/message";
import { theme } from "../utils/ThemeProvider";
import { Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import Copyright from "../utils/Copyright";
// import { loginSchema } from "../utils/schemas";



// const Login = () => {
//     let navigate = useNavigate();

//     const [isShowPassword, setIsShowPassword] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const { isLoggedIn } = useSelector((state) => state.auth);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(clearMessage());
//     }, [dispatch]);

//     const formik = useFormik({
//         initialValues : {
//             email: "",
//             password: "",
//         },
//         validationSchema : loginSchema,
//         onSubmit : (values) => {
//             const {email, password} = values;
//             setLoading(true);
    
//             dispatch(login(email, password))
//             .unwrap()
//             .then(() => {
                
//                 window.location.reload();
//             })
//             .catch(() => {
//                 setLoading(false);
//             });
//         },
//     });

//     if (isLoggedIn) {
//         return <Navigate to="/dashboard" />;
//     }

import React, { useState } from 'react';
import axiosInstance from '../config/axiosInstance';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axiosInstance.post('/api/auth/signin', {
        email,
        password,
      });

      // Menyimpan token ke dalam lokal storage
      localStorage.setItem('accessToken', response.data.accessToken);

      // Lakukan sesuatu setelah login berhasil, misalnya navigasi ke halaman lain
      console.log(response.data);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      // Handle kesalahan, misalnya menampilkan pesan kesalahan kepada pengguna
    }
  };

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
                        {/* <form onSubmit={formik.handleSubmit} style={{alignItems: "center", margin: 2 }}>
                            <TextField 
                                fullWidth
                                id="email"
                                name="email"
                                label="Email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
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
                        </form> */}
                        <div>
                            <h1>Login</h1>
                            <div>
                                <label>Email:</label>
                                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div>
                                <label>Password:</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button onClick={handleLogin}>Login</button>
                        </div>
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