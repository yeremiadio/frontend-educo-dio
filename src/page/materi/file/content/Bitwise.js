import React from 'react'
import Bitwise from '../img/Bitwise.png'
import BitwiseAnd from '../img/BitwiseAND.png'
import BitwiseNot from '../img/BitwiseNOT.png'
import BitwiseRightShift from '../img/BitwiseRightShift.png'
import BitwiseXor from '../img/BitwiseXOR.png'
import HasilBitwiseNot from '../img/‎HasildanProgramBitwiseNOT.png'
import HasilBitwiseOr from '../img/HasilsanProgramBitwiseOR.png'
import HasilBitwiseXor from '../img/HasildanProgramBitwiseXOR.png'
import HasilBitwiseRightShift from '../img/HasildanProgramBitwiseRightShift.png'
import { Box, Typography } from '@mui/material'

export default function ContentBitwise() {
    return (
        <>
            <Typography variant='h5' gutterBottom><b>5. Operator Bitwise</b></Typography>
                <Box sx={{marginLeft: 4}}>
                    Operator bitwise merupkan operator yang digunakan untuk operasi 
                    berdasarkan bit (biner) dari sebuah nilai.<br/><br/>
                    Contoh Operator Bitwise :<br/>
                    <Box height='60vh' width='80vh'>
                        <img alt='Bitwise' src={Bitwise}/>
                    </Box>
                    <br/><br/>
                    <b>- Bitwise AND</b>
                    <Box sx={{marginLeft: 4}}>
                        Bitwise AND merupakan operasi bit berdasarkan logika AND.<br/>
                        Perhatikan bilangan biner untuk nilai 6 dan 3. Apabila kita melakukan operasi AND di sana, 
                        maka akan menghasilkan bilangan biner baru. Kemudian biner yang dihasilkan tersebut diubah 
                        kembali ke dalam bilangan desimal.<b> Maka hasilnya adalah 2.</b> <br/><br/>
                        <Box height='50vh' width='80vh'>
                            <img alt='BitwiseAND' src={BitwiseAnd}/>
                        </Box>
                    </Box>
                    <br/><br/>
                    <b>- Bitwise OR</b>
                    <Box sx={{marginLeft: 4}}>
                        Contoh Program dan Hasil Bitwise OR : <br/>
                        <Box height='40vh' width='80vh'>
                            <img alt='HasilBitwiseOr' src={HasilBitwiseOr}/>
                        </Box>
                    </Box>
                    <br/><br/>
                    <b>- Bitwise XOR</b>
                    <Box sx={{marginLeft: 4}}>
                        Operator XOR (Exclusive OR) akan menghasilkan nilai 1 saat kedua nilai tidak sama.<br/>
                        <Box height='50vh' width='80vh'>
                            <img alt='BitwiseXOR' src={BitwiseXor}/>
                        </Box>
                        <br/><br/>
                        Contoh Program dan Hasil Bitwise XOR : <br/>
                        <Box height='50vh' width='80vh'>
                            <img alt='HasilBitwiseXOR' src={HasilBitwiseXor}/>
                        </Box>
                    </Box>
                    <br/><br/>
                    <b>- Bitwise NOT</b>
                    <Box sx={{marginLeft: 4}}>
                        Bitwise NOT dikenal juga dengan komplemen. 
                        Operator ini akan menghasilkan nilai biner yang terbalik dari biner aslinya.<br/>
                        <Box height='50vh' width='80vh'>
                            <img alt='BitwiseNOT' src={BitwiseNot}/>
                        </Box><br/><br/>
                        Contoh Program dan Hasil Bitwise NOT :<br/>
                        <Box height='50vh' width='80vh'>
                            <img alt='HasilBitwiseNOT' src={HasilBitwiseNot}/>
                        </Box>
                    </Box>
                    <br/><br/>
                    <b>- Bitwise RightShift</b>
                    <Box sx={{marginLeft: 4}}>
                        Bitwise right shift sama seperti left shift. 
                        Perbedaanya terletak pada arahnya. 
                        Right shift akan menggeser bit ke arah kanan.<br/>
                        <Box height='50vh' width='80vh'>
                            <img alt='BitwiseRightShift' src={BitwiseRightShift}/>
                        </Box>
                        <br/><br/>
                        Contoh Program dan Hasil Bitwise RightShift : <br/>
                        <Box height='50vh' width='80vh'>
                            <img alt='HasilBitwiseRightShift' src={HasilBitwiseRightShift}/>
                        </Box>
                    </Box>
                </Box>
        </>
    )
}
