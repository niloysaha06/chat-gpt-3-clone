import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import "../common/styles.css"

const Navbar = () => {
    const theme = useTheme();
  return (
    <Box width={'100%'} p="1rem 6%" textAlign={'center'} sx={{boxShadow: 3, mb:2, bgcolor: 'white', color:'white'}}>
        <Typography variant='h1' color={"#60bf70"} fontWeight={"bold"}>
            AI GPT3 Clone
        </Typography>
        <Link className='text_link' to="/register" p={1}>Sign Up</Link>
        <Link className='text_link' to="/login" p={1}>Sign In</Link>
    </Box>
  )
}

export default Navbar