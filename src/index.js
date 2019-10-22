import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import configureStore from 'redux/configureStore';
import { Provider } from 'react-redux';

// Export your top level component as JSX (for static rendering)
export default App;
const store = configureStore();

// Render your app
if (typeof document !== 'undefined') {
  const renderMethod = module.hot
    ? ReactDOM.render
    : ReactDOM.hydrate || ReactDOM.render;
  const render = Comp => {
    renderMethod(React.createElement(Comp), document.getElementById('root'));
  };

  // Render!
  render(App);
}
