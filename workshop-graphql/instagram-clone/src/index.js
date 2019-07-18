import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ListPage from './components/ListPage'
import CreatePage from './components/CreatePage'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ApolloClient from 'apollo-client'
import {ApolloProvider} from 'react-apollo'
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import 'tachyons';

const httpLink = new HttpLink({
    uri: 'https://api.graph.cool/simple/v1/cjy8zxro739130192mq996u6t',
  });
  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  });
  

  ReactDOM.render(
    <ApolloProvider client={client}>
      <Router>
        <Route path="/" component={ListPage} />
        <Route path="/create" component={CreatePage} />
      </Router>
    </ApolloProvider>,
    document.getElementById('root'),
  );
  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
