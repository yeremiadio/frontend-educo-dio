import { Box, Typography } from '@mui/material'
import React from 'react'
import ContentAritmatika from './content/Aritmatika'
import ContentPenugasan from './content/Penugasan'
import ContentPembanding from './content/Pembanding'
import ContentLogika from './content/Logika'
import ContentBitwise from './content/Bitwise'
import ContentOperatorLainnya from './content/OperatorLainnya'

export default function Operator() {
    return (
        <>
            <Typography variant='h4' fontFamily="serif">
                Materi C++ - Operator.
            </Typography>
            <Typography variant='h7' fontStyle="italic" color="gray" gutterBottom>
                Date of Post Sample
            </Typography>
            <br />
            <br />
            <Typography variant='h6' align='justify'>
                <Typography variant='h4'gutterBottom># Definisi Operator</Typography>
                <Box sx={{marginLeft: 4}}>
                    Operator adalah sebuah simbol. Simbol yang digunakan untuk melakukan operasi tertentu.<br/>
                    Misalnya:<br/>
                    Kita ingin menjumlahkan nilai dari variabel x dan y, maka kita bisa menggunakan operator penjumlahan (+).<br/>
                    Ada enam jenis kelompok operator dalam pemrograman C++ yang harus kita ketahui:<br/>
                    <Box sx={{marginLeft: 4}}>
                        <Typography variant='h6' gutterBottom>
                            -	Operator Aritmatika;<br/>
                            -	Operator Penugasan;<br/>
                            -	Operator Pembanding;<br/>
                            -	Operator Logika;<br/>
                            -	Operator Bitwise;<br/>
                            -	dan Operator Lain-lain.
                        </Typography>
                    </Box>
                    <br/>
                    <ContentAritmatika/>
                    <br/><br/>
                    <ContentPenugasan/>
                    <br/><br/>
                    <ContentPembanding/>
                    <br/><br/>
                    <ContentLogika/>
                    <br/><br/>
                    <ContentBitwise/>
                    <br/><br/>
                    <ContentOperatorLainnya/>
                </Box>
            </Typography>
            </>
    )
}
