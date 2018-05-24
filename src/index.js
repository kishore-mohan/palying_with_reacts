import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import EventHandler from './EventHandler'
import NumberList from './NumberList'

const num = ["React", "Angular"]
ReactDOM.render(<NumberList num={num} />, document.getElementById('root'));
