import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';
import { ApolloProvider } from 'react-apollo-hooks';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const client =
  new ApolloClient({
    cache: new InMemoryCache(),
    link: createUploadLink({ uri: process.env.REACT_APP_API_URI }),
  });
const MOUNT_NODE = document.getElementById('root');
const render = () => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>,
    MOUNT_NODE,
  );
};
if (!module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./App.js'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
} else {
  render();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
