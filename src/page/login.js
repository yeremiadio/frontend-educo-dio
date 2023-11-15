import React, { useState } from "react";
import {  useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Avatar, Button, Container, TextField, ThemeProvider, Typography } from "@mui/material";
import { theme } from "../utils/ThemeProvider";
import { Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import Copyright from "../utils/Copyright";



const Login = () => {
    const navigate = useNavigate();
    const [isShowPassword, setIsShowPassword] = useState(false);
    const { isLoggedIn } = useSelector((state) => state.auth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
        }

    // const formik = useFormik({
    //     initialValues: {
    //         email: '',
    //         password: '',
    //     },
    //     validationSchema: loginSchema,
    //     onSubmit: async (values) => {
    //         try {
    //             // Mengatur status loading menjadi true
    //             setLoading(true);

    //             // Melakukan dispatch login
    //             await dispatch(login(values)).unwrap();

                
    //         } catch (error) {
    //             // Menangani error, misalnya menampilkan pesan kesalahan kepada pengguna
    //             console.error(error);
    //         } finally {
    //             // Navigasi ke halaman dashboard setelah login berhasil
    //             navigate("/dashboard");
    //             // Mengatur status loading menjadi false setelah selesai
    //             setLoading(false);
    //         }
    //     },
    // });

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
                            <TextField 
                                type="text" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                                fullWidth
                                sx={{margin: 2}}
                            />
                            <div style={{ display: "flex", width: "100%", position: "relative" }}>
                                <TextField 
                                    fullWidth
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
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
                            <Button 
                                fullWidth 
                                type="submit" 
                                onClick={handleLogin} 
                                variant="contained" 
                                disabled={loading} 
                                sx={{margin: 2}}>
                                    Sign In
                            </Button>
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