import { Box, Stack } from '@mui/material'
import React from 'react'
import Posts from '../Posts/Posts'

const Feed = () => {
  return (
    <Box  flex={4} p={2} >
        <Stack direction="row" flexWrap="wrap" >

      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
        </Stack>

      
    </Box>
  )
}

export default Feed
