import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import TodoContainer from './components/TodoContainer';

ReactDOM.render(<TodoContainer />, document.getElementById('root'));
registerServiceWorker();
