import React from 'react';
import { render } from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Signup from 'components/Signup';
import 'config/i18n';
import 'scss/application.scss';

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

import reportWebVitals from './reportWebVitals';

const queryClient = new QueryClient()

const renderApp = () => {
  render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Switch>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/home" />
            <Route path="/login" />
            <Route path="/booklist" />
          </Switch>
        </BrowserRouter>
      </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

// Render once
renderApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
