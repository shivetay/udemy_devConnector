import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Register extends Component {
  state = {
    formData: {
      name: '',
      email: '',
      password: '',
      password2: '',
    },
  };

  static propTypes = {
    setAlert: PropTypes.func,
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
    const { password, password2 } = this.state.formData;
    const { setAlert } = this.props;
    e.preventDefault();
    if (password !== password2) {
      setAlert('Password do not match', 'danger');
    } else {
      console.log(this.state);
    }
  };

  render() {
    const { name, email, password, password2 } = this.state.formData;

    return (
      <section className='container'>
        <h1 className='large text-primary'>Sign Up</h1>
        <p className='lead'>
          <i className='fas fa-user'></i> Create Your Account
        </p>
        <form
          className='form'
          action='create-profile.html'
          onSubmit={this.onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Name'
              name='name'
              value={name}
              onChange={this.onChange}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={this.onChange}
            />
            <small className='form-text'>
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </small>
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
          <div className='form-group'>
            <input
              type='password'
              placeholder='Confirm Password'
              name='password2'
              value={password2}
              onChange={this.onChange}
              minLength='6'
            />
          </div>
          <input type='submit' className='btn btn-primary' value='Register' />
        </form>
        <p className='my-1'>
          Already have an account? <Link to='/login'>Sign In</Link>
        </p>
      </section>
    );
  }
}

export default Register;
