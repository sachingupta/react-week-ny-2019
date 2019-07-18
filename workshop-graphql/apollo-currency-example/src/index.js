import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { gql } from "apollo-boost";
import ApolloClient from "apollo-boost";
import { ApolloProvider, Query  } from "react-apollo";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));

  const ExchangeRates = () => (
    <Query
      query={gql`
        {
          rates(currency: "USD") {
            currency
            rate
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
  
        return data.rates.map(({ currency, rate }) => (
          <div key={currency}>
            <p>{currency}: {rate}</p>
          </div>
        ));
      }}
    </Query>
  );

  const ApolloApp = () => (
    <ApolloProvider client={client}>
      <div>
       <ExchangeRates />
      </div>
    </ApolloProvider>
  );

ReactDOM.render(<ApolloApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
