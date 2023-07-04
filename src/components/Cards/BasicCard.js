import { Card, CardActions, CardContent, CardHeader } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function BasicCard() {
  return (
    <Card>
        <CardHeader>
            EDUCO
        </CardHeader>
        <CardContent>
            Lorem Ipsum dolor sit amet
        </CardContent>
        <CardActions>
            <Link>Get Started</Link>
        </CardActions>
    </Card>
  )
}
