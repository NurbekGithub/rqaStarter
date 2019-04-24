import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Pages from './pages';
import './App.css';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <>
      <CssBaseline />
      <MainLayout>
        <Pages />
      </MainLayout>
    </>
  );
}

export default App;
