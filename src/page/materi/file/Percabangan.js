import { Box, Typography } from '@mui/material'
import React from 'react'
import PercabanganImage from './img/Percabangan.png'
import PercabanganIf from './img/PercabanganIF.png'
import PercabanganIfElse from './img/PercabanganIFELSE.png'
import PercabanganIfElseIf from './img/PercabanganIFELSEIF.png'
import PercabanganSwitch from './img/PercabanganSwitch.png' 
import ProgramPercabanganSwitch from './img/ProgramPercabanganSwitch.png'
import ProgramPercabanganOperatorTenary from './img/ProgramPercabanganOperatorTenary.png'
import { Editor } from '@monaco-editor/react'

export default function Percabangan() {
    return (
        <>
            <Typography variant='h4' fontFamily="serif">
                Materi C++ - Percabangan.
            </Typography>
            <Typography variant='h7' fontStyle="italic" color="gray" gutterBottom>
                Date of Post Sample
            </Typography>
            <br />
            <br />
            <Typography variant='h4' gutterBottom># Definisi Prcabangan.</Typography>
            <Box sx={{marginLeft: 4}}>
                <Typography variant='h6' align='justify'>
                    Percabangan adalah suatu pemilihan statemen yang akan dieksekusi 
                    dimana pemilihan tersebut didasarkan atas kondisi tertentu. 
                    Di dalam C++ terdapat dua buah jenis struktur yang digunakan untuk 
                    mengimplementasikan suatu percabangan, yaitu dengan menggunakan 
                    struktur if dan struktur switch. Pada flow chart, logika percabangan 
                    diwakili <b>“jika…maka”</b> digambarkan dalam bentuk cabang:<br/><br/>
                    <Box height='45vh' width='40vh'>
                        <img alt='Percabangan' src={PercabanganImage}/>
                    </Box>
                    <br/><br/>
                    <Typography variant='h5' gutterBottom><b>1. Percabangan IF</b></Typography>
                    <Box sx={{marginLeft: 4}}>
                        Struktur ini merupakan struktur yang paling sederhana karena hanya melibatkan 
                        satu buah ekspresi yang akan diperiksa. Bentuk flowchart dari struktur percabangan 
                        yang memiliki satu kondisi adalah sebagai berikut:<br/>
                        <Box height='55vh' width='60vh'>
                            <img alt='PercabanganIF' src={PercabanganIf}/>
                        </Box>
                        <br/><br/>
                        Flowchart tersebut dapat kita baca seperti ini:<br/>
                        <b>“Jika total belanja lebih besar dari Rp 100.000, Maka tampilkan pesan Selamat, Anda dapat hadiah”</b><br/>
                        Kalau dibawah Rp 100.000 bagaimana?<br/>
                        Ya pesannya tidak akan ditampilkan.<br/><br/>
                        Contoh Program Percabangan IF : <br/>
                        <Editor
                            defaultLanguage='cpp'
                            height='40vh'
                            theme='vs-dark'
                            defaultValue='#include <iostream>
                                        using namespace std;
                                        
                                        int main() {
                                            cout << "=== Program Pembayaran ===" << endl;
                                            unsigned int total_belanja;

                                            cout << "Masukan total Belanja : ";
                                            cin >> total_belanja;

                                            //Menggunakan Percabangan IF
                                            if(total_belanja > 100000){
                                                cout << "Selamat! anda mendapatkan Hadiah" << endl;
                                            }
                                            cout << "Terimakasih sudah berbelanja" << endl;

                                            return 0;
                                        }'
                        />
                    </Box>
                    <br/><br/>
                    <Typography variant='h5' gutterBottom><b>2. Percabangan IF/ELSE.</b></Typography>
                    <Box sx={{marginLeft: 4}}>
                        Struktur percabangan jenis ini sedikit lebih kompleks bila dibandingkan dengan struktur 
                        yang hanya memiliki satu buah kondisi. Bentuk flowchart dari struktur percabangan 
                        dengan dua kondisi adalah sebagai berikut:<br/>
                        <Box height='55vh' width='60vh'>
                            <img alt='PercabanganIF/ELSE' src={PercabanganIfElse}/>
                        </Box>
                        <br/><br/>
                        Ini adalah flowchart untuk mengecek password.<br/>
                        Apabila password benar, pesan yang ada pada blok hijau akan ditampilkan: “Selamat datang bos!", 
                        Tapi kalau salah, maka pesan yang ada di blok merah yang akan ditampilkan: 
                        “Password salah, coba lagi!". Kemudian, pesan yang berada di blok abu-abu akan tetap ditampilkan, 
                        karena dia bukan bagian dari blok percabangan if/else.<br/><br/>
                        Contoh Program Percabangan IF/ELSE :<br/>
                        <Editor
                            defaultLanguage='cpp'
                            height='40vh'
                            theme='vs-dark'
                            defaultValue='#include <iostream>
                                        using namespace std;
                                        
                                        int main() {
                                            string password;

                                            cout << "======= Password =======" << endl;
                                            cout << "Masukkan Password : " << endl;
                                            cin >> password;

                                            // percabangan if/else
                                            if(password == "kopi"){
                                                cout << "Selamat Datang." << endl;
                                            } else {
                                                cout << "Password salah, silahkan coba lagi." << endl;
                                            }
                                            cout << "Terimakasih sudah menggunakan aplikasi ini." << endl;

                                            return 0;
                                        }'
                        />
                    </Box>
                    <br/><br/>
                    <Typography variant='h5' gutterBottom><b>3. Percabangan IF/ELSE/IF.</b></Typography>
                    <Box sx={{marginLeft: 4}}>
                        Struktur percabangan jenis ini sedikit lebih kompleks karena memiliki lebih dari 
                        dua blok kondisi. Bentuk flowchart dari struktur percabangan dengan lebih dari dua 
                        kondisi adalah sebagai berikut:<br/>
                        <Box height='70vh' width='60vh'>
                            <img alt='PercabanganIFELSEIF' src={PercabanganIfElseIf}/>
                        </Box>
                        <br/><br/>
                        Perhatikan Blok yang diberi warna. <br/>
                        Ini adalah blok untuk percabangan if/else/if. 
                        Kita bisa menambahkan berapapun blok yang kita inginkan.<br/><br/>
                        Contoh Program Percabangan IF/ELSE/IF :<br/>
                        <Editor
                            defaultLanguage='cpp'
                            height='40vh'
                            theme='vs-dark'
                            defaultValue='#include <iostream>
                                        using namespace std;
                                        
                                        int main() {
                                            int nilai;
                                            string grade;

                                            cout << "=== Program Grade Nilai ===" << endl;
                                            cout << "Inputkan nilai akhir: " << endl;
                                            cin >> nilai;

                                            //menggunakan percabangan if/else/if
                                            if(nilai >= 90){
                                                grade = "A";
                                            } else if(nilai >= 80){
                                                grade = "B+";
                                            } else if(nilai >= 70){
                                                grade = "B";
                                            } else if(nilai >= 60){
                                                grade = "C+";
                                            } else if(nilai >= 50){
                                                grade = "C";
                                            } else if(nilai >= 40){
                                                grade = "D";
                                            } else if(nilai >= 30){
                                                grade = "E";
                                            } else {
                                                grade = "F";
                                            }

                                            cout >> "Grade anda : " << grade << endl;

                                            return 0;
                                        }'
                        />
                    </Box>
                    <br/><br/>
                    <Typography variant='h5' gutterBottom><b>4. Percabangan Switch/Case.</b></Typography>
                    <Box sx={{marginLeft: 4}}>
                        Switch/case adalah bentuk lain dari if/else/if. 
                        Bentuk flowchart dari struktur percabangan ini adalah sebagai berikut:<br/>
                        <Box height='40vh' width='70vh'>
                            <img alt='PercabanganSwitch' src={PercabanganSwitch}/>
                        </Box>
                        <br/><br/>
                        Kita dapat mermbuat blok kode (case) sebanyak yang diinginkan di dalam blok switch. 
                        Pada "value", kita bisa isi dengan nilai yang nanti akan dibandingkan dengan varabel. 
                        Setiap case harus diakhiri dengan break. Khusus untuk default, tidak perlu diakhiri 
                        dengan break karena dia terletak di bagian akhir. Pemberian break bertujuan agar program 
                        berhenti mengecek case berikutnya saat sebuah case terpenuhi.<br/><br/>
                        Contoh Program Percabangan Switch/Case : <br/>
                        <Box height='60vh' width='50vh'>
                            <img alt='ProgramPercabanganSwitch' src={ProgramPercabanganSwitch}/>
                        </Box>
                    </Box>
                    <br/><br/>
                    <Typography variant='h5' gutterBottom><b>5. Percabangan Operator Tenary.</b></Typography>
                    <Box sx={{marginLeft: 4}}>
                        Percabangan menggunakan opreator ternary merupakan bentuk lain dari percabangan if/else. 
                        Bisa dibilang bentuk singkatnya dari if/else. Operator ternary juga dikenal dengan sebutan 
                        operator kondisi (conditional operator). Bentuk strukturnya seperti ini:<br/><br/>
                        <b><i>(kondisi) ? true : false</i></b> <br/><br/>
                        Bagian kondisi dapat kita isi dengan ekspresi yang menghasilkan nilai true dan false. 
                        Lalu setlah tanda tanya ? adalah bagian pilihan. Jika kondisi bernilai benar, maka true 
                        yang akan dipilih. Tapi kalau salah, maka false yang akan dipilih.<br/><br/>
                        Contoh Program Percabangan Operator Tenary : <br/>
                        <Box height='70vh' width='60vh'>
                            <img alt='ProgramPercabanganOperatorTenary' src={ProgramPercabanganOperatorTenary}/> 
                        </Box>
                    </Box>
                    <br/><br/>
                    <Typography variant='h5' gutterBottom><b>6. Percabangan Bersarang (Nested).</b></Typography>
                    <Box sx={{marginLeft: 4}}>
                    Kita juga dapat membuat blok percabangan di dalam percabangan. 
                    Ini disebut percabangan bersarang atau nested if.<br/><br/>
                    Contoh Program Percabangan Bersarang (Nested) :<br/>
                    <Editor
                        defaultLanguage='cpp'
                        height='40vh'
                        theme='vs-dark'
                        defaultValue='#include <iostream>
                                    using namespace std;
                                    
                                    int main() {
                                        string username, password;

                                        cout << "Masukkan Username : ";
                                        cin >> username;
                                        cout >> "Masukkan Password : ";
                                        cin >> password;

                                        if(username == "yourusername"){
                                            if(password == "pass123"){
                                                cout << "Selamat Datang." << endl;
                                            } else {
                                                cout << "Password Salah, silahkan coba lagi." << endl;
                                            }
                                        } else {
                                            cout << "Anda tidak terdaftar." << endl;
                                        }
                                        return 0;
                                    }'
                    />
                    </Box>
                </Typography>
            </Box>
        </>
    )
}
