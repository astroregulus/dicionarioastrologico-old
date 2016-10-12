if ('serviceWorker' in navigator && (window.location.protocol === 'http:' || window.location.hostname === 'localhost')) {
  
  navigator.serviceWorker.register('service-worker.js', {
    scope: './'
  }).then(function(registration) {
    if (typeof registration.update == 'function') {
      registration.update();
    }
  }).catch(function(e) {
    console.error('Error during service worker registration:', e);
  });
  
}