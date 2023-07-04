import React from 'react'
import Buttons from '../components/Buttons/Button'
import { useNavigate } from 'react-router-dom' 
import { Typography } from '@mui/material';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
    }}>
        <Typography variant="h3">Page Not Found.</Typography>
        <Buttons
          type="submit"
          variant="outlined"
          onClick={() => navigate(-1)}
          label="Back to Pervious"
        />
    </div>
  )
}
