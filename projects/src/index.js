import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// var name=<h1>hello world</h1>

// const name=<h1>hi hlo</h1>


const age=20;
const display=age>18? "eligible":"not eligible";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
