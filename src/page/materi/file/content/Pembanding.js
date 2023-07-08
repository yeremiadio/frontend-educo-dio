import React from 'react'
import Pembanding from '../img/Pembanding.png'
import HasilPembanding from '../img/HasilProgramPembanding.png'
import { Box, Typography } from '@mui/material'
import { Editor } from '@monaco-editor/react'

export default function ContentPembanding() {
  return (
    <>
        <Typography variant='h5' gutterBottom><b>3. Operator Pembanding</b></Typography>
            <Box sx={{marginLeft: 4}}>
                Operator pembanding adalah operator untuk membandingkan dua buah nilai. 
                Operator ini juga dikenal dengan operator relasi. Nilai yang akan dihasilkan 
                dari operasi ini berupa true (1) dan false (0).
                <br/><br/>Contoh Operator Pembanding : <br/>
                <Box height="80vh" width="80vh">
                    <img alt='Pembanding' src={Pembanding} />
                </Box>
                <br/><br/> Contoh Program dan Hasil Output :
                <br/>
                <Editor
                    defaultLanguage='cpp'
                    height='40vh'
                    theme='vs-dark'
                    defaultValue='#include <iostream>
                                using namespace std;
                                
                                int main(){
                                    int a = 4, b = 3;
                                    bool hasil;

                                    cout << "a = " << a << endl;
                                    cout << "b = " << b << endl;

                                    //Menggunakan operator Pembanding
                                    hasil = a > b;
                                    cout << "a > b = " << hasil << endl;

                                    hasil = a < b;
                                    cout << "a < b = " << hasil << endl;

                                    hasil = a >= b;
                                    cout << "a >= b = " << hasil << endl;

                                    hasil = a <= b;
                                    cout << "a <= b = " << hasil << endl;

                                    hasil = a == b;
                                    cout << "a == b = " << hasil << endl;

                                    hasil = a != b;
                                    cout << "a != b = " << hasil << endl;

                                    return 0;
                                }'
                />
                <br/>
                <Box height="40vh" width="80vh">
                    <img alt='HasilPembanding' src={HasilPembanding} />
                </Box>

            </Box>
    </>
  )
}
