import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import './clean-blog.min.css';
import './vendor/bootstrap/css/bootstrap.min.css'
import './vendor/fontawesome-free/css/all.min.css'

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
