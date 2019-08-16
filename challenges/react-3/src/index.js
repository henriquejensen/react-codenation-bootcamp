import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import './index.css';

ReactDOM.render(
    <Router>
        <App />
    </Router>
, document.getElementById('root'));
