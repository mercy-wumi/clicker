import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './components/button';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Button />,
    document.getElementById('root')
);
registerServiceWorker();
