import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    formData: {
      email: '',
      password: '',
    },
  };

  static poropTypes = {
    logUser: PropTypes.func,
    isAuth: PropTypes.bool,
  };

  onChange = (e) => {
    // setting formData in the state properly
    const { formData } = this.state;
    let newFormData = { ...formData };
    newFormData[e.target.name] = e.target.value;
    this.setState({
      formData: newFormData,
    });
  };

  onSubmit = (e) => {
    const { email, password } = this.state.formData;
    const { logUser } = this.props;
    e.preventDefault();
    logUser(email, password);
  };

  render() {
    const { email, password } = this.state.formData;
    const { isAuth } = this.props;

    if (isAuth) {
      return <Redirect to='/dashboard' />;
    }

    return (
      <section className='container'>
        <h1 className='large text-primary'>Sign In</h1>
        <p className='lead'>
          <i className='fas fa-user'></i> Sign Into Your Account
        </p>
        <form
          className='form'
          action='create-profile.html'
          onSubmit={this.onSubmit}>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={this.onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              minLength='6'
              value={password}
              onChange={this.onChange}
            />
          </div>
          <input type='submit' className='btn btn-primary' value='Login' />
        </form>
        <p className='my-1'>
          Don't have an account? <Link to='/register'>Sign In</Link>
        </p>
      </section>
    );
  }
}

export default Login;
