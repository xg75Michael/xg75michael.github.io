import Button from '@mui/material/Button';
import routes from '@/router';
import { useRoutes } from 'react-router-dom';
import { Suspense } from 'react';

import './App.css';

function App() {
  const element = useRoutes(routes);
  return <Suspense>{element}</Suspense>;
}

export default App;
