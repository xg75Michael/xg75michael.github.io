import { useRoutes } from 'react-router-dom';
import routes from '@/router';
import { Suspense } from 'react';

import '@/App.css';

function App() {
  const element = useRoutes(routes);
  return <Suspense>{element}</Suspense>;
}

export default App;
