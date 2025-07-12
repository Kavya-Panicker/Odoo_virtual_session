<<<<<<< HEAD
import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import App from './App';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />); 
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
>>>>>>> 579529a5e9f8b52df5ef6ec7dda1c62d15dbf8e1
