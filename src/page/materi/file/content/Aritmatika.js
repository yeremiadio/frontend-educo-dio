import React from 'react'
import { Box, Typography } from '@mui/material'
import Aritmatika from '../img/Aritmatika.png'
import HasilAritmatika from '../img/HasilProgramAritmatika.png'
import { Editor } from '@monaco-editor/react'

export default function ContentAritmatika() {
    return (
        <>
                <Typography variant='h5' gutterBottom><b>1. Operator Aritmatika</b></Typography>
                        <Box sx={{marginLeft: 4}}>
                            Operator Aritmatika merupakan operator yang digunakan untuk melakukan operasi aritmatika.
                            Dari Penjumlahan (+) sampai dengan sisa bagi (%).
                            <br/><br/> Contoh Operator Aritmatika :
                            <br/>
                            <Box height="40vh" width="80vh">
                                <img alt='Aritmatika' src={Aritmatika} />
                            </Box>
                            <br/><br/> Contoh Program serta Hasil Aritmatika :
                            <br/>
                            <Editor
                                defaultLanguage='cpp'
                                height='40vh'
                                theme='vs-dark'
                                defaultValue='#include <iostream>
                                            using namespace std;
                                            
                                            int main() {
                                                int a, b, c;

                                                cout << "Inputkan Nilai a: ";
                                                cin >> a;
                                                cout << "Inputkan Nilai b: ";
                                                cin >> b;

                                                //menggunakan operator aritmatika penjumlahan
                                                c = a + b;

                                                cout << "Hasil a + b = " << c <<endl;

                                                return 0;
                                            }'
                            />
                            <br/>
                            <Box height="40vh" width="80vh">
                                <img alt='Hasil Aritmatika' src={HasilAritmatika} />
                            </Box>
                        </Box>
            </>
    )
}
