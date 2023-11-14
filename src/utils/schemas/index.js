import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
    email: Yup
    .string("Enter your Email!")
    .email()
    .required("This field is required!"),
    password: Yup
    .string("Enter your Password!")
    .min(6, "Password minimum 8 character!")
    .required("This field is required!"),
});

export const registerSchema = Yup.object().shape({
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
    confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password must match.")
    .required("This field is required!"),
    roleId: Yup.number()
    .integer('Role must be an integer')
    .required('Role is required')
    .positive('Role must be a positive integer'),
});

