import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: 'HomePage' */),
);

class App extends Component {
  render() {
    return (
      <>
        <Header>
          <AppBar />
        </Header>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route component={HomePage} />
          </Switch>
        </Suspense>
        <Footer />
      </>
    );
  }
}

export default App;
