import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainLayout from '../src/components/layout/MainLayout/MainLayout';
import Landing from '../src/components/views/Landing/Landing';
import Login from '../src/components/features/Login/Login';
import Register from '../src/components/features/Register/Register';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <Route exact path='/' component={Landing} />
          <section className='container'>
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
            </Switch>
          </section>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

export default App;
