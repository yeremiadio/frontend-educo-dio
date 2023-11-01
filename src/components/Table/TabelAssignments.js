import React, {useEffect, useState} from 'react'; 
import axios from 'axios';
import { Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';


const TabelAssignments = () => {
    const [data, setData] = useState([]); 

    useEffect(() => {
        axios.get('http://localhost:8080/assignments')
        .then((response) => {
            setData(response.data);
        })
        .catch((error) => {
            console.error('Error fetching data :', error);
        });
    }, []);

    return (
        <div>

            <TableContainer component={Paper} style={{ backgroundColor: 'darkgrey', borderBlockWidth: 10 }}>
                <Typography align='center' variant='h3' fontFamily={'fantasy'} gutterBottom>
                    <strong>Assignment's C++</strong> 
                </Typography>
                <Divider/>
                {data.values && data.values.length > 0 ? (
                    <Table stickyHeader aria-label='sticky table' >
                        <TableHead>
                            <TableRow>
                                <TableCell align='center'><strong>Score</strong></TableCell>
                                <TableCell align='center'><strong>Name</strong></TableCell>
                                <TableCell align='center'><strong>Class</strong></TableCell>
                                <TableCell align='center'><strong>Atd. Number</strong></TableCell>
                                <TableCell align='center'><strong>Assignment's</strong></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.values.map((row, rowIndex) => (
                                <TableRow key={rowIndex}>
                                    {row.map((cell, cellIndex) => (
                                        <TableCell key={cellIndex} align='center'>
                                            {cell}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                ):(
                    <Typography align='center' variant='h4'>404 Not Found.</Typography>
                )}
            </TableContainer>
            
        </div>
    );
};

export default TabelAssignments