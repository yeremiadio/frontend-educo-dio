import { Box } from '@mui/material'
import React from 'react'
import CardOutlined from '../../components/Cards/CardOutlined'
import { useNavigate } from 'react-router-dom'

export default function MateriCard() {
    const navigate = useNavigate();
    return (
    <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems:"justify",
        '& > :not(style)': {
            m: 2,
            width: 541,
            height: 260,
            },
    }}
        align="justify"
        elevation={5}
    >
        <CardOutlined
            sx={{bgcolor: "transparent", }}
            align="justify"
            variantcard="outlined"
            colorlabel="text.secondary"
            label="Materi 1"

            varianttitle="h5"
            title="Lorem ipsum dolor si amet..."

            variantbody="body2"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

            sizebutton="small"
            titlebutton="Continue Reading..."
            onClick={() => navigate ("*")}
            
        />
        <CardOutlined
            
            sx={{bgcolor: "transparent",}}
            alignText="justify"
            variantcard="outlined"
            colorlabel="text.secondary"
            label="Materi 2"

            varianttitle="h5"
            title="Lorem ipsum dolor si amet..."

            variantbody="body2"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

            sizebutton="small"
            titlebutton="Continue Reading..."
            onClick={() => navigate ("*")}
        />
        <CardOutlined
            
            sx={{bgcolor: "transparent",}}
            alignText="justify"
            variantcard="outlined"
            colorlabel="text.secondary"
            label="Materi 3"

            varianttitle="h5"
            title="Lorem ipsum dolor si amet..."

            variantbody="body2"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

            sizebutton="small"
            titlebutton="Continue Reading..."
            onClick={() => navigate ("*")}
        />
        <CardOutlined
            
            sx={{bgcolor: "transparent",}}
            alignText="justify"
            variantcard="outlined"
            colorlabel="text.secondary"
            label="Materi 4"

            varianttitle="h5"
            title="Lorem ipsum dolor si amet..."

            variantbody="body2"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

            sizebutton="small"
            titlebutton="Continue Reading..."
            onClick={() => navigate ("*")}
        />
        <CardOutlined
            
            sx={{bgcolor: "transparent",}}
            alignText="justify"
            variantcard="outlined"
            colorlabel="text.secondary"
            label="Materi 5"

            varianttitle="h5"
            title="Lorem ipsum dolor si amet..."

            variantbody="body2"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

            sizebutton="small"
            titlebutton="Continue Reading..."
            onClick={() => navigate ("*")}
        />
    </Box>
  )
}
