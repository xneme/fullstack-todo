import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'

export default () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Yet another fullstack TODO app
          </Typography>
          <Link href="https://github.com/xneme/fullstack-todo">
            <Button color="inherit">Project in Github</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}