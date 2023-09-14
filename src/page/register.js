import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { register } from "../utils/slices/auth";
import { clearMessage } from "../utils/slices/message";
import { theme } from "../utils/ThemeProvider";
import { useNavigate } from "react-router-dom";
import { Button, Container, MenuItem, Select, TextField, ThemeProvider, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { registerSchema } from "../utils/schemas";
import { useUserContext } from "../utils/UserContext";



const Register = () => {
    let navigate = useNavigate();
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [successful, setSuccessful] = useState(false);
    const [loading, setLoading] = useState(false);

    const { message } = useSelector((state) => state.message);
    const { userUpdateRole } = useUserContext;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            roles: "siswa", //Default user role.
        },
        validationSchema: registerSchema,
        onSubmit: (values) => {
            const { username, email, password } = values;
            setLoading(true);
    
            setSuccessful(false);
    
            dispatch(register({ username, email, password }))
            .unwrap()
            .then(() => {
                setSuccessful(true);
                navigate("/");
            })
            .catch(() => {
                setSuccessful(false);
                setLoading(false);
            });
            userUpdateRole(values.roles);
        },
    });

    return (
        <div className="main">
            <div className="content">
            <ThemeProvider theme={theme}>
                <Container maxWidth="xs" sx={{ bgcolor: "Background", alignContent: "center" }} >
                <Typography component={"h1"} variant="h5" color="ActiveCaption" ><b>Register Your Account.</b></Typography>
                <form onSubmit={formik.handleSubmit}>
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
                        sx={{ margin: 2 }}
                    />
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
                        sx={{ margin: 2 }}
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
                        <TextField 
                            fullWidth
                            id="confirmPassword"
                            name="confirmPassword"
                            label="Confirm Password"
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                            type={isShowPassword ? "text" : "password"}
                            sx={{marginTop: 2, marginLeft: 2, marginBottom: 2}}
                        />
                        <div style={{ position: "absolute", right: 10, top: 33, cursor: "pointer" }}
                            onClick={() => setIsShowPassword(!isShowPassword)} 
                        >
                            {isShowPassword ? (
                                <VisibilityOff fontSize="medium" color="action" />
                            ) : (
                                <Visibility fontSize="medium" color="action" />
                            )}
                        </div>
                    </div>
                    <Select
                        fullWidth
                        id="roles"
                        name="roles"
                        value={formik.values.roles}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.roles && Boolean(formik.errors.roles)}
                        helperText={formik.touched.roles && formik.errors.roles}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        sx={{ margin: 2 }}
                    >
                        <MenuItem value=""><strong><em>Please Select your Status!</em></strong></MenuItem>
                        <MenuItem value="siswa">Siswa</MenuItem>
                        <MenuItem value="guru">Guru</MenuItem>
                        <MenuItem value="admin" disabled>Admin</MenuItem>
                    </Select>
                    <Button fullWidth type="submit" variant="contained" disabled={loading} sx={{margin: 2}}>Sign Up</Button>
                </form>
                {message && (
                    <div className="form-group">
                    <div
                        className={
                        successful ? "alert alert-success" : "alert alert-danger"
                        }
                        role="alert"
                    >
                        {message}
                    </div>
                    </div>
                )}
                </Container>
            </ThemeProvider>
            </div>
        </div>
    );
};

export default Register;