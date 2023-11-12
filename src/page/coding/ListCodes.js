// CodeList.js
import React, { useEffect, useState } from "react";
// import axios from 'axios';
import {
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import axiosInstance from "../../config/axiosInstance";

function ListCodes({ onCodeSelect, onDeleteCode, codeId }) {
  const [codes, setCodes] = useState([]);

  useEffect(() => {
    async function fetchCodes() {
      try {
        const response = await axiosInstance.get(
          "/api/codes"
        );
        setCodes(response.data);
      } catch (error) {
        console.error("Failed to fetch codes:", error);
      }
    }

    fetchCodes();

    // lakukan polling untuk refresh data
    // const pollingInterval = setInterval(fetchCodes, 5000);

    // return () => {
    //     clearInterval(pollingInterval);
    // };
  }, []);

  const handleCodeDelete = async () => {
    try {
      if (onDeleteCode) {
        // Penanganan Berhasil
        await axiosInstance.delete(`/api/codes/${onDeleteCode}`);
        console.log("Delete Code success.");
        alert("Berhasil menghapus data Code.");
      }
    } catch (error) {
      console.error("Failed to delete Code : ", error);
    }
  };

  return (
    <div>
      <Grid container spacing={3}>
        {codes.map((Code) => (
          <Grid item key={Code.id} lg={4} md={4} sm={4} xs={12}>
            <Card
              variant="outlined"
              onClick={() => onCodeSelect(Code.id)}
              style={{ cursor: "pointer", colorScheme: ["normal" | "dark"] }}
              sx={{ height: "150px" }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  fontStyle={"normal"}
                  fontFamily={"fantasy"}
                >
                  {Code.name}
                </Typography>
                <Divider />
                <Typography
                  variant="body2"
                  color={"black"}
                  fontFamily={"cursive"}
                  margin={2}
                >
                  {Code.userCode}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <br />
      <Button
        variant="contained"
        onClick={handleCodeDelete}
        sx={{ marginBottom: 2, fontFamily: "cursive" }}
      >
        Delete
      </Button>
    </div>
  );
}

export default ListCodes;
