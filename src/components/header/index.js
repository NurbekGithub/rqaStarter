import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import './header.module.css';

export default function Header({ setDrawerOpen }) {
  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={() => setDrawerOpen(true)} className='menuButton' color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Eyes
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </header>
  )
}
