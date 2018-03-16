import React from 'react';
import ReactDom from 'react-dom';

import App from 'components/App';
import StateApi from 'state-api';

const store = new StateApi(window.initialData);

ReactDom.hydrate(
  <App store={store}/>,
  document.getElementById('root')
);