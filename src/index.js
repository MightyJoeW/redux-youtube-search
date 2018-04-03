// External Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';


// Internal Dependencies
import App from './App';

// Render App
ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root'));
