import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import MuiDrawer from '../components/drawer';
import Header from '../components/header';
import './layout.module.css';

export default function MainLayout({children}) {
  const [drawerOpen, setDrawerOpen] = useState(false)
  return (
    <Grid container direction='column' wrap='nowrap' style={{ height: '100vh' }}>
      <Header setDrawerOpen={setDrawerOpen}/>
      <main>
        <MuiDrawer
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
        />
        {children}
      </main>
    </Grid>
  )
}
