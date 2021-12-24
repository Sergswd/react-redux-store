import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import BookstoreService from './services/bookstore-service';
import { BookstoreServiceProvider } from './components/book-service-context';

import store from './store';

const bookStoreService = new BookstoreService();

ReactDom.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServiceProvider value={bookStoreService}>
        <Router>
          <App/>
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);

