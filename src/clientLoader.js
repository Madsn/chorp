
import main from './client';

function run() {
  // Run the application when both DOM is ready and page content is loaded
  if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
    main();
  } else {
    document.addEventListener('DOMContentLoaded', main, false);
  }
}

if (!global.Intl) {
  require.ensure([
    'intl',
    'intl/locale-data/jsonp/da.js',
  ], require => {
    require('intl');
    require('intl/locale-data/jsonp/da.js');

    run();
  }, 'intl');
} else {
  run();
}
