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
import { useSearchParams } from "react-router-dom";

function ListCodes() {
  const [codes, setCodes] = useState([]);
  const token = localStorage.getItem("token");
  const [searchParams, setSearchParams] = useSearchParams();
  const codeIdParam = searchParams?.get("id");
  useEffect(() => {
    if (!!token) {
      async function fetchCodes() {
        try {
          const response = await axiosInstance.get("/api/codes", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setCodes(response.data);
        } catch (error) {
          console.error("Failed to fetch codes:", error);
        }
      }

      fetchCodes();
    }
  }, [token]);

  const handleCodeDelete = async () => {
    try {
      // Penanganan Berhasil
      await axiosInstance.delete(`/api/codes/${codeIdParam}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Delete Code success.");
      alert("Berhasil menghapus data Code.");
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
              onClick={() => {
                searchParams.set("id", Code.id);
                setSearchParams(searchParams);
              }}
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
