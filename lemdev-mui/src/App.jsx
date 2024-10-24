import React from 'react'
import "./App.css"
import Sidebar from './components/Sidebar/Sidebar'
import Rightbar from './components/Rightbar/Rightbar'
import Feed from './components/Feed/Feed'
import { Box, Stack } from '@mui/material'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <Box >
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  )
}

export default App
