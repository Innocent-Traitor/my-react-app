import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Editor from './Editor';
import Preview from './Preview';
import { useState } from 'react';


function App() {
  const [text, setText] = useState('');
  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <>
      <Editor 
        value={text}
        onChange={handleChange}
      />
      <Preview 
        value={text}
        />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
