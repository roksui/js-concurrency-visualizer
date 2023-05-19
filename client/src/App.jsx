import React from 'react';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { MantineProvider } from "@mantine/core";
import { HomePage } from './pages/HomePage';
import { HomeLayout } from './pages/HomeLayout';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<HomeLayout />}>
      <Route path="/" element={<HomePage />} />
    </Route>
  )
);

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/main")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <MantineProvider theme={{ colorScheme: 'light' }}>
      <div className="App">
        <header className="App-header">
          <p>{!data ? "Loading..." : data}</p>
        </header>
      </div>
    </MantineProvider>
  );
}

export default App;
