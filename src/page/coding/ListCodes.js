// CodeList.js
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import axiosInstance from "../../config/axiosInstance";

function ListCodes({ onCodeSelect, codeId }) {
  const [codes, setCodes] = useState([]);

  useEffect(() => {
    async function fetchCodes() {
      try {
        const accessToken = localStorage.getItem("accessToken");

        if (accessToken) {
          const response = await axiosInstance.get("/api/codes", {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          setCodes(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch codes:", error);
      }
    }

    fetchCodes();
  }, []);

  const handleCodeDelete = async (codeIdToDelete) => {
    try {
      const accessToken = localStorage.getItem("accessToken");

      if (accessToken) {
        await axiosInstance.delete(`/api/codes/${codeIdToDelete}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
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
        onClick={() => handleCodeDelete(codeId)}
        sx={{ marginBottom: 2, fontFamily: "cursive" }}
      >
        Delete
      </Button>
    </div>
  );
}

export default ListCodes;
