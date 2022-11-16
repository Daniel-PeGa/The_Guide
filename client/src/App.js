import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Home from './pages/Home';
import Header from './pages/Header';
import Footer from './pages/Footer';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Home />
          </div>
          <Footer />
        </div>
      </ApolloProvider>  
    );
}


export default App;