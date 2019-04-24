import React from 'react';
import Grid from '@material-ui/core/Grid';
import Camera from './Camera';
import Typography from '@material-ui/core/Typography';

export default function Cameras() {
  return (
    <Grid container justify="space-between">
      <Grid item xs={12} md={6} container justify="center" alignItems='center' direction='column'>
        <Camera />
        <Typography variant='h6'>Левое</Typography>
      </Grid>
      <Grid item xs={12} md={6} container justify="center" alignItems='center' direction='column'>
        <Camera />
        <Typography variant='h6'>Правое</Typography>
      </Grid>
    </Grid>
  );
}
