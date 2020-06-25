import React from 'react';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import Layout from './components/commons/Layout';
import Products  from './components/Products';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from './utils/protectedRoute';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route path='/:path?' exact>
            <Layout>
              <Switch>
                <ProtectedRoute exact path="/products" component={Products} />
                <Route exact path="/" component={Dashboard}/>
                <Route path="*" component={() => "404 NOT FOUND"} />
              </Switch>
            </Layout>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
