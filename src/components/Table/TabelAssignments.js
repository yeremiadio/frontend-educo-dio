import React, {useEffect, useState} from 'react'; 
import axios from 'axios';


const TabelAssignments = () => {
    const [data, setData] = useState([]); 

    //const url = 'http://localhost:8080/';

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
            <h2>Data from Google Sheets</h2>
            {data.values && data.values.length > 0 ? (
            <table id='customers'>
                <tbody>
                {data.values.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                        <td key={cellIndex}>{cell}</td>
                    ))}
                    </tr>
                ))}
                </tbody>
            </table>
            ) : (
                <p>Data is empty.</p>
            )}
        </div>
    );
};

export default TabelAssignments