import React from "react";
import { Typography } from "@mui/material";

export default function Copyright(props) {
    return <Typography variant={props.variant} color={props.color} align={props.align} {...props}>
        Copyright &copy; <a color="primary" href="https://instagram.com/diwa.rta?utm_source=qr&igshid=aHBIbXMwamgzOWtr">Diwarta</a> 
    </Typography>
}