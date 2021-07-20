import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'; 
import MainMenu from './containers/MainMenu';

ReactDOM.render(<MainMenu />, document.getElementById('root'));
registerServiceWorker();
