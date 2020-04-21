import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import MainLayout from '../src/components/layout/MainLayout/MainLayout';
import Landing from '../src/components/views/Landing/Landing';
import Login from '../src/components/features/Login/LoginContainer';
import Register from '../src/components/features/Register/RegisterContainer';
import Alerts from '../src/components/common/Alerts/AlertsContainer';
import Dashboard from '../src/components/views/Dashboard/DashboardContainer';
import PrivateRoute from '../src/components/common/Routing/PrivateRouteContainer';
import CreatePrfile from '../src/components/views/Profile/CreateProfile';

import { setAuthToken } from './utils/utils';
import { loadUser } from './redux/AuthReducer';

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <MainLayout>
            <Route exact path='/' component={Landing} />
            <section className='container'>
              <Alerts />
              <Switch>
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <PrivateRoute exact path='/dashboard' component={Dashboard} />
                <PrivateRoute
                  exact
                  path='/create-profile'
                  component={CreatePrfile}
                />
              </Switch>
            </section>
          </MainLayout>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
