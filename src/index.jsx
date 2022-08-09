/* import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const title = 'P & M Tours 2';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('app')
);

module.hot.accept(); */

/* import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/css/font-awesome.min.css';
import './assets/css/themify-icons.css';
import './assets/css/flaticon.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './pages/app/app';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

module.hot.accept();
