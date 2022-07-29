import React from 'react';
import ReactDOM from 'react-dom';

//import 'dotenv/config';

import App from './App';

const title = 'P & M Tours';

console.log('Helllo Node.js project');

console.log(process.env.TEST_VAR);

ReactDOM.render(
  //<App title={title} />,
  document.getElementById('app')
);

module.hot.accept();
