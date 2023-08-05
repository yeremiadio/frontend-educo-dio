import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import { register } from "../utils/slices/auth";
import { clearMessage } from "../utils/slices/message";
import { theme } from "../utils/ThemeProvider";
import { useNavigate } from "react-router-dom";
import { Button, Container, TextField, ThemeProvider, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";


const validationSchema = Yup.object().shape({
    username: Yup.string()
    .test(
        "len",
        "The username must be between 3 and 20 characters.",
        (val) =>
        val && val.toString().length >= 3 && val.toString().length <= 20
    )
    .required("This field is required!"),
    email: Yup.string()
    .email("This is not a valid email.")
    .required("This field is required!"),
    password: Yup.string()
    .test(
        "len",
        "The password must be between 6 and 40 characters.",
        (val) =>
        val && val.toString().length >= 6 && val.toString().length <= 40
    )
    .required("This field is required!"),
});

const Register = () => {
    let navigate = useNavigate();
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [successful, setSuccessful] = useState(false);

    const { message } = useSelector((state) => state.message);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            const { username, email, password } = values;
    
            setSuccessful(false);
    
            dispatch(register({ username, email, password }))
            .unwrap()
            .then(() => {
                setSuccessful(true);
                navigate("/");
            })
            .catch(() => {
                setSuccessful(false);
            });
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
                    <Button fullWidth type="submit" variant="contained" sx={{margin: 2}}>Sign Up</Button>
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