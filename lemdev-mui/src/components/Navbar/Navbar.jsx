import { AppBar, Box, Stack, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import PetsIcon from '@mui/icons-material/Pets';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Avatar from '@mui/material/Avatar';

const CustomToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
})

// const CustomBox = styled(Box)(({ theme }) =>({
//   display:'flex',
//   alignItems: "center",
//   gap:theme.spacing(3),
// }));

const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <CustomToolbar>
        <Typography variant='h6' sx={{ display: { xs: 'none', sm: "block" } }}>LEMA DEV</Typography>
        <PetsIcon sx={{ display: { xs: 'block', sm: "none" } }} />
        <Stack direction="row" spacing={3}>
          <Badge badgeContent={4} color="error">
            <MailIcon color="white" />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsNoneIcon color="white" />
          </Badge>
          <Avatar alt="Travis Howard" sx={{width:30, height:30,bgcolor:"orange"}}>R</Avatar>
        </Stack>
      </CustomToolbar>
    </AppBar>
  )
}

export default Navbar
