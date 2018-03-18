import React from 'react';
import ReactDOM from 'react-dom';
import Presentation from './presentation-modules';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Presentation />, document.getElementById('root'));
registerServiceWorker();
