import React from 'react';
import ReactDOM from 'react-dom/client'; // Používa sa "react-dom/client" od React 18
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Vytvorenie koreňového renderovania
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
