import React, { StrictMode } from 'react';

import ReactDOM from 'react-dom/client';

import './index.css';

import { App } from './App';
import { UsersList } from 'components';

// const Link = href => React.createElement('a', { href: href, test: 'test', children: 'Hello WORLD' });

// const Wrapper = () => React.createElement('div', { children: [Link('/ig')] });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    {/* <Wrapper /> */}
    <App />
  </StrictMode>,
);
