import { Box, Button, Container, ThemeProvider } from "@mui/material";
import React from "react";
import CardOutlined from "../components/Cards/CardOutlined"; 
import { useNavigate } from "react-router-dom";
import { theme } from "../utils/ThemeProvider"
import CardImage from "../components/Cards/CardImage";
import Content from "../components/Images/Hero2.jpg"


export default function LandingPage(params) {
    const navigate = useNavigate()

    return (
        <div className="main">
            <div className="content">
                <ThemeProvider theme={theme}>
                    <Container maxWidth="lg" >
                        <Box display="flex" flexDirection="column">
                            <h1>Welcome Codingers,</h1>
                            <h3>to Our Web Education Coding.</h3>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection:'row',
                            alignItems:"justify",
                            '& > :not(style)': {
                                m: 2,
                                },
                        }}>
                                <CardOutlined
                                    variantcard="outlined"
                                    colorlabel="text.secondary"
                                    label="Education Coding"

                                    varianttitle="h6"
                                    title="Educo"

                                    variantbody="body2"
                                    body="The Educo 'Education Coding' application is a learning application about programming languages and understanding the basics of programming that users want to learn. 
                                            This application also provides an online code compiler to assist users in their programming code creation. 
                                            And currently, it includes a C++ programming language-based code compiler. 
                                            So go ahead, explore your experience and create your best code."
                                />
                                <Box sx={{
                                    display: 'flex', 
                                    flexDirection:'column',
                                }}>
                                    <CardImage
                                        component="img"
                                        alt="Content"
                                        src={Content}
                                    />
                                    <Box sx={{ 
                                        display: "flex", 
                                        flexDirection: 'row', 
                                        '& > :not(style)': {
                                            m: 1,
                                        },
                                    }}>
                                        <Button 
                                            variant="contained" 
                                            size="large"
                                            fullWidth
                                            sx={{
                                                color: "ButtonShadow",
                                                bgcolor: "blue",
                                                fontFamily: "cursive",
                                                fontSize: 20
                                            }}
                                            onClick={() => navigate ("/login")}>
                                            Get Started
                                        </Button>
                                        <Button 
                                            variant="contained" 
                                            size="large"
                                            fullWidth
                                            sx={{
                                                color: "ButtonShadow",
                                                bgcolor: "blue",
                                                fontFamily: "cursive",
                                                fontSize: 20
                                            }}
                                            onClick={() => navigate ("/register")}>
                                            Sign Up
                                        </Button>
                                    </Box>
                                </Box>
                        </Box>
                    </Container>
                </ThemeProvider>
            </div>
        </div>
    )
}