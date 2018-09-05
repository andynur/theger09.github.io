import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import './styles/css/style.css'
import 'pe7-icon/dist/dist/pe-icon-7-stroke.min.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();