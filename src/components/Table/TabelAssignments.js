import React, { useEffect, useState } from "react";
import {
  Button,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Delete, Download } from "@mui/icons-material";
import axiosInstance from "../../config/axiosInstance";
import * as XLSX from 'xlsx';
import { FileSaver } from "file-saver";

const TabelAssignments = () => {
  const [data, setData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/api/getassignments")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data :", error);
      });
  }, []);

  const handleDownload = async() => {
    try {
      const response = await axiosInstance.get('/api/getassignments');
  
      // Mengonversi data menjadi worksheet
      const worksheet = XLSX.utils.json_to_sheet(response.data);
  
      // Membuat workbook dan menambahkan worksheet
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet 1');
  
      // Mengonversi workbook menjadi blob
      XLSX.write(workbook, { bookType: 'xlsx', mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  
      // Mengonversi blob menjadi ArrayBuffer
      const arrayBuffer = XLSX.write(workbook, { bookType: 'arraybuffer', mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  
      // Membuat blob URL dari blob
      const blobURL = window.URL.createObjectURL(new Blob([arrayBuffer]));
  
      // Mengunduh file menggunakan FileSaver
      FileSaver.saveAs(blobURL, 'data_assignments.xlsx');
  
      console.log('Download Data success.');
    } catch (error) {
      console.error('Failed to download assignments data:', error);
    }
  };

  const handleCheckboxChange = (rowIndex) => {
    if (selectedRows.includes(rowIndex)) {
      setSelectedRows(selectedRows.filter((index) => index !== rowIndex));
    } else {
      setSelectedRows([...selectedRows, rowIndex]);
    }
  };

  const handleDelete = () => {
    if (selectedRows.length === 0) {
      alert("Pilih data yang akan dihapus.");
      return;
    }

    // Kirim permintaan penghapusan data yang dipilih
    selectedRows.forEach((rowIndex) => {
      const rowData = data[rowIndex]; // Data yang akan dihapus
      // Kirim permintaan penghapusan data dengan rowData ke server
      axiosInstance
        .delete(`/api/delete-assignments/${rowData}`, {
          data: rowData,
        })
        .then(() => {
          alert(`Data berhasil dihapus: ${JSON.stringify(rowData)}`);
          // Hapus data dari state lokal
          setSelectedRows(selectedRows.filter((index) => index !== rowIndex));
        })
        .catch((error) => {
          alert(`Gagal menghapus data: ${JSON.stringify(rowData)}`);
        });
    });
  };

  return (
    <div>
      <TableContainer
        component={Paper}
        style={{ backgroundColor: "darkgrey", borderBlockWidth: 10 }}
      >
        <Button
          variant="text"
          style={{ alignItems: "end" }}
          onClick={handleDownload}
          sx={{ color: "white" }}
        >
          <Download />
        </Button>
        <Button variant="text" onClick={handleDelete} sx={{ color: "white" }}>
          <Delete />
          Delete Data
        </Button>
        <Typography
          align="center"
          variant="h3"
          fontFamily={"fantasy"}
          gutterBottom
        >
          <strong>Assignment's C++</strong>
        </Typography>
        <Divider />
        {data && data.length > 0 ? (
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center"></TableCell>
                <TableCell align="center">
                  <strong>Score</strong>
                </TableCell>
                <TableCell align="center">
                  <strong>Name</strong>
                </TableCell>
                <TableCell align="center">
                  <strong>Class</strong>
                </TableCell>
                <TableCell align="center">
                  <strong>Atd. Number</strong>
                </TableCell>
                <TableCell align="center">
                  <strong>Assignment's</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  <TableCell align="center">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(rowIndex)}
                      onChange={() => handleCheckboxChange(rowIndex)}
                    />
                  </TableCell>
                  {Object.values(row).map((cell, cellIndex) => (
                    <TableCell key={cellIndex} align="center">
                      {cell}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <Typography align="center" variant="h4">
            404 Not Found.
          </Typography>
        )}
      </TableContainer>
    </div>
  );
};

export default TabelAssignments;
