import { AppBar, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import PetsIcon from '@mui/icons-material/Pets';

const CustomToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between",
})

const Navbar = () => {
  return (
    <AppBar position='stickY'>
      <CustomToolbar>
       <Typography variant='h6' sx={{display:{xs:'none', sm:"block"}}}>LEMA DEV</Typography>
       <PetsIcon sx={{display:{xs:'block', sm:"none"}}} />
      </CustomToolbar>
    </AppBar>
  )
}

export default Navbar
