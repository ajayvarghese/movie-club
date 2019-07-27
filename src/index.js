import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';

const rootEl = document.getElementById('app');


render(<App />, rootEl);

if (module.hot) {
    module.hot.accept('./containers/App', function () {
        // Require the new version and render it instead
        var NextApp = require('./containers/App')
        ReactDOM.render(<NextApp />, rootEl)
      })
}

// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function() {
//       navigator.serviceWorker.register('/sw.js').then(function(registration) {
//         // Registration was successful
//         console.log('ServiceWorker registration successful with scope: ', registration.scope);
//       }, function(err) {
//         // registration failed :(
//         console.log('ServiceWorker registration failed: ', err);
//       });
//     });
// }


if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}