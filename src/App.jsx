import { useState } from 'react';
import './App.css';
import Layout from './Layout';

function App() {
  return (
    <>
      <div className="card">
        <Layout />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
