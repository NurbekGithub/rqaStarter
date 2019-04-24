import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';
import Hero from './Hero';
import NewResearch from './NewResearch';

const ResearchJournal = React.lazy(() => import('./ResearchJournal'));
const NotFoundPage = React.lazy(() => import('./NotFoundPage'));

export default function pages() {
  return (
    <Suspense fallback={<LinearProgress color='secondary'/>}>
      <Switch>
        <Route exact path='/' component={Hero} />
        <Route exact path='/research-journal' component={ResearchJournal} />
        <Route path='/research-journal/new-research' component={NewResearch}/>
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  )
}

