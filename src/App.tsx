import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import routes, { RenderRoutes } from 'router';

function App() {
  return (
    <BrowserRouter>
      {RenderRoutes(routes)}
  </BrowserRouter>
  );
}

export default App;
