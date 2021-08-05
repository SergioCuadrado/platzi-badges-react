// Es análogo a 'createElement'
import React from 'react';
// Es análogo a appendChild
import ReactDOM from 'react-dom';

//CSS
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

//Components
//import BadgeFunction from './components/Badge';
import App from './components/App';

//Container
const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<App />, container);
