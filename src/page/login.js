import React, { useState } from 'react';
import axiosInstance from '../config/axiosInstance';
import { useNavigate } from "react-router-dom";
import { 
    Avatar, 
    Button, 
    Container, 
    IconButton, 
    InputAdornment, 
    TextField, 
    ThemeProvider, 
    Typography 
} from "@mui/material";
import { theme } from "../utils/ThemeProvider";
import { Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import Copyright from "../utils/Copyright";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
        const response = await axiosInstance.post('/api/auth/signin', {
            email,
            password,
        });

        // Menyimpan token ke dalam lokal storage
        localStorage.setItem('accessToken', response.data.accessToken);

        // Lakukan sesuatu setelah login berhasil, misalnya navigasi ke halaman lain
        navigate("/dashboard");
        console.log(response.data);
        return response.data;
        } catch (error) {
        console.error(error);
        // Handle kesalahan, misalnya menampilkan pesan kesalahan kepada pengguna
        return null;
        }
    }

    const handlePasswordVisibility = () => {
        setIsShowPassword(!isShowPassword);
    };

    return (
        <div className="main"> 
            <div className="content">
                <ThemeProvider theme={theme}>
                    <Container  maxWidth="xs"  sx={{ bgcolor: "Background", alignContent: "center" }}>
                    <Avatar variant="outline" sx={{ margin: 2, alignItems: 'center'}} >
                        <Lock />
                    </Avatar>
                    <Typography align='center' component={"h1"} variant="h5" color="ActiveCaption">
                        Sign In
                    </Typography>
                        <form>
                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            id="password"
                            name="password"
                            label="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type={isShowPassword ? 'text' : 'password'}
                            margin="normal"
                            InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                <IconButton onClick={handlePasswordVisibility} edge="end">
                                    {isShowPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                                </InputAdornment>
                            ),
                            }}
                        />
                        <Button variant="contained" onClick={handleLogin}>
                            Sign In
                        </Button>
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