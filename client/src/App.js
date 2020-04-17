// import React, { Component } from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// // import PropTypes from 'prop-types';

// import MainLayout from '../src/components/layout/MainLayout/MainLayout';
// import Landing from '../src/components/views/Landing/Landing';
// import Login from '../src/components/features/Login/Login';
// import Register from '../src/components/features/Register/RegisterContainer';
// import Alerts from '../src/components/common/Alerts/AlertsContainer';

// import { setAuthToken } from './utils/utils';
// import { loadUser } from './redux/AuthReducer';

// class App extends Component {
//   componentDidMount() {
//     setAuthToken(localStorage.token);
//     store.dispatch(loadUser(), []);
//   }
//   render() {
//     return (
//       <BrowserRouter>
//         <MainLayout>
//           <Route exact path='/' component={Landing} />
//           <section className='container'>
//             <Alerts />
//             <Switch>
//               <Route exact path='/register' component={Register} />
//               <Route exact path='/login' component={Login} />
//             </Switch>
//           </section>
//         </MainLayout>
//       </BrowserRouter>
//     );
//   }
// }

// export default App;

import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import MainLayout from '../src/components/layout/MainLayout/MainLayout';
import Landing from '../src/components/views/Landing/Landing';
import Login from '../src/components/features/Login/LoginContainer';
import Register from '../src/components/features/Register/RegisterContainer';
import Alerts from '../src/components/common/Alerts/AlertsContainer';

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
              </Switch>
            </section>
          </MainLayout>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
