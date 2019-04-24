import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import ResearchJournalTable from '../components/researchJournal/ResearchJournalTable';
import './ResearchJournal.css';

export default function ResearchJournal() {
  return (
    <>
      <Grid container justify="space-between">
        <Typography variant="h5">
          Журнал исследований
        </Typography>
        <Button color='primary' component={Link} to='/research-journal/new-research'>
          Новое исследование
        </Button>
      </Grid>
      <br />
      <ResearchJournalTable />
    </>
  );
}
