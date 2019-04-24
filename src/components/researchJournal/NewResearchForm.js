import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FormLabel from '@material-ui/core/FormLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

export default function NewResearchForm() {
  return (
    <Paper component='form' style={{ padding: '10px' }}>
      <Grid container alignItems='flex-end'>
        <Grid item xs={2}>
          <FormLabel htmlFor="iin">ИИН:</FormLabel>
        </Grid>
        <Grid item xs={2}>
          <Input id="iin" name="iin" variant="outlined" />
        </Grid>
      </Grid>
      <Grid container alignItems='flex-end'>
        <Grid item xs={2}>
          <FormLabel htmlFor="age">Возраст:</FormLabel>
        </Grid>
        <Grid item xs={2}>
          <Input id="age" name="age" variant="outlined" />
        </Grid>
      </Grid>
      <Grid container alignItems='flex-end'>
        <Grid item xs={2}>
          <FormLabel htmlFor="gender">Пол:</FormLabel>
        </Grid>
        <Grid item xs={2}>
          <Input id="gender" name="gender" variant="outlined" />
        </Grid>
      </Grid>
      <Grid container alignItems='flex-end'>
        <Grid item xs={2}>
          <FormLabel htmlFor="appointmentTime">Дата и время приема:</FormLabel>
        </Grid>
        <Grid item xs={2}>
          <Input id="appointmentTime" name="appointmentTime" variant="outlined" />
        </Grid>
      </Grid>
      <div style={{ textAlign: 'end' }}>
        <Button variant='contained' color='primary' type='submit'>Сохранить</Button>
      </div>
    </Paper>
  );
}
