'use strict';

import React from 'react';
import App from './app/index.js';

const url = 'http://localhost:49199';

React.render(<App url={url} />, document.getElementById('main'));