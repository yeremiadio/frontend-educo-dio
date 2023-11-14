import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { register } from "../utils/slices/auth";
import { clearMessage } from "../utils/slices/message";
import { theme } from "../utils/ThemeProvider";
import { useNavigate } from "react-router-dom";
import {
    Button,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    ThemeProvider,
    Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { registerSchema } from "../utils/schemas";

const ErrorMessage = ({ message, successful }) => (
    <div className="form-group">
        <div className={successful ? "alert alert-success" : "alert alert-danger"} role="alert" color="dark">
        {message}
        </div>
    </div>
);

const Register = () => {
    let navigate = useNavigate();
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const { message } = useSelector((state) => state.message);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    const formik = useFormik({
        initialValues: {
        username: "",
        email: "",
        kelas: "",
        password: "",
        confirmPassword: "",
        roleId: "",
        },
        validationSchema: registerSchema,
        onSubmit: (values) => {
        setLoading(true);
        dispatch(register(values))
            .unwrap()
            .then(() => {
                setLoading(false);
                navigate("/");
            })
            .catch(() => setLoading(false));
        },
    });

    const handlePasswordVisibility = () => {
        setIsShowPassword(!isShowPassword);
    };

    return (
        <div className="main">
        <div className="content">
            <ThemeProvider theme={theme}>
            <Container maxWidth="xs" sx={{ bgcolor: "Background", alignContent: "center" }}>
                <Typography component={"h1"} variant="h5" color="ActiveCaption">
                <b>Register Your Account.</b>
                </Typography>
                <form onSubmit={formik.handleSubmit} style={{ color: 'gray'}}>
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
                    sx={{ marginTop: 2, marginLeft: 2, marginBottom: 2 }}
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
                    sx={{ marginTop: 2, marginLeft: 2, marginBottom: 2 }}
                    />
                    <div
                    style={{ position: "absolute", right: 10, top: 33, cursor: "pointer" }}
                    onClick={handlePasswordVisibility}
                    >
                        {isShowPassword ? (
                            <VisibilityOff fontSize="medium" color="action" />
                        ) : (
                            <Visibility fontSize="medium" color="action" />
                        )}
                    </div>
                </div>
                <div>
                    <FormControl fullWidth>
                        <InputLabel id="roleId-label">Role</InputLabel>
                        <Select
                        labelId="roleId-label"
                        id="roleId"
                        name="roleId"
                        value={formik.values.roleId}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.roleId && Boolean(formik.errors.roleId)}
                        >
                        <MenuItem value="" label="Select a role" disabled>Select a Role</MenuItem>
                        <MenuItem value={1} label="Siswa">Siswa</MenuItem>
                        <MenuItem value={2} label="Guru">Guru</MenuItem>
                        </Select>
                    </FormControl>
                    {formik.touched.roleId && formik.errors.roleId && (
                        <div>{formik.errors.roleId}</div>
                    )}
                    </div>
                <Button fullWidth type="submit" variant="contained" disabled={loading} sx={{ margin: 2 }}>
                    Sign Up
                </Button>
                </form>
                {message && <ErrorMessage message={message} successful={loading} />}
            </Container>
            </ThemeProvider>
        </div>
        </div>
    );
};

export default Register;
