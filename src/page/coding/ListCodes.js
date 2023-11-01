// CodeList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Divider, Grid, Typography } from '@mui/material';

function ListCodes() {
    const [codes, setCodes] = useState([]);

    useEffect(() => {
        async function fetchCodes() {
            try {
                const response = await axios.get('http://localhost:8080/api/codes');
                setCodes(response.data);
            } catch (error) {
                console.error('Failed to fetch codes:', error);
            }
        }
    
        fetchCodes();
    }, []);

    return (
        <div>
            <Grid container spacing={3}>
            {codes.map((Code) => (
            <Grid item key={Code.id} lg={4} md={4} sm={4} xs={12}>
                <Card variant='outlined'>
                    <CardContent>
                        <Typography variant='h5' fontStyle={'normal'} fontFamily={'fantasy'}>{Code.name}</Typography>
                        <Divider/>
                        <Typography variant='body2' color={'black'} fontFamily={'cursive'} margin={2}>
                        {Code.userCode}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            ))}
            </Grid>
        </div>
    );
}

export default ListCodes;
