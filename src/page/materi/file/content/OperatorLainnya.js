import React from 'react'
import OperatorLainnya from '../img/OperatorLainnya.png'
import HasilOperatorLainnya from '../img/HasilOperatorLainnya.png'
import { Box, Typography } from '@mui/material'
import { Editor } from '@monaco-editor/react'

export default function ContentOperatorLainnya() {
    return (
        <>
            <Typography variant='h5' gutterBottom><b>6. Operator Lainnya</b></Typography>
            <Box sx={{marginLeft: 4}}>
                Selain dari operator yang kita bahas di atas, 
                terdapat beberapa operator lain yang harus diketahui.<br/>
                <Box height='50vh' width='80vh'>
                    <img alt='OperatorLainnya' src={OperatorLainnya}/>
                </Box>
                <br/><br/>
                Contoh Program dan Hasil Operator Lainnya :<br/>
                <Editor
                    defaultLanguage='cpp'
                    height='40vh'
                    theme='vs-dark'
                    defaultValue='#include <iostream>
                                using namespace std;
                                
                                int main(){
                                    int a = 5;
                                    int *ptr_a = &a;
                                    cout << "Alamat memori variabel a adalah " << &a <<endl;

                                    //mengubah nilai a dari pointer
                                    cout << "Nilai a awal = " << a <<endl;
                                    *ptr_a = 21;
                                    cout << "Nilai a diubah = " << a <<endl;

                                    return 0;
                                }'
                />
                <br/>
                <Box height='50vh' width='80vh'>
                    <img alt='HasilOperatorLainnya' src={HasilOperatorLainnya}/>
                </Box>
            </Box>
        </>
    )
}
