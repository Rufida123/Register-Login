import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import { UserProvider } from './UserContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
    <UserProvider>
        <App />
    </UserProvider>
    </Router>
);


