import React from 'react';
import Typography from '@material-ui/core/Typography';
import NewResearchForm from '../components/researchJournal/NewResearchForm';
import Cameras from '../components/researchJournal/Cameras';

export default function NewResearch() {
  return (
    <>
      <Typography variant="h5">
        Детали исследования
      </Typography>
      <br />
      <NewResearchForm />
      <br />
      <Cameras />
    </>
  );
}
