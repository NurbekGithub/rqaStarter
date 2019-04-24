import React from 'react';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Camera() {
  return <Paper style={{ width: '550px', height: '500px' }}>
    <CircularProgress />
  </Paper>;
}
