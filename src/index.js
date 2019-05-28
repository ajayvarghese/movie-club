import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import register from './offline-support-sw.js';

const rootEl = document.getElementById('app');


render(<App />, rootEl);

if (module.hot) {
    module.hot.accept('./containers/App', function () {
        // Require the new version and render it instead
        var NextApp = require('./containers/App')
        ReactDOM.render(<NextApp />, rootEl)
      })
}

console.log(process);

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log('Service worker registered'))
    .catch((error) => {throw new Error(error)});
}

// register();