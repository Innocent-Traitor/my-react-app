import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Editor from './Editor';
import Preview from './Preview';


function App() {
  return (
    <>
      <Editor />
      <Preview />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
