import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Home from '../components/home.js';

export default () => (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
      </div>
    </BrowserRouter>
);
