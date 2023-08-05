import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Copyright(props) {
    return <Typography variant={props.variant} color={props.color} align={props.align} {...props}>
        Copyright &copy; <Link color="primary" href="/">Diwarta</Link> 
    </Typography>
}