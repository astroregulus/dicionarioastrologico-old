if ('serviceWorker' in navigator && (window.location.protocol === 'https:' || window.location.hostname === 'localhost')) {
  
  navigator.serviceWorker.register('service-worker.js', {
    scope: './'
  });
  
}