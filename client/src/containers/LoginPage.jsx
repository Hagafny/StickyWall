import React from 'react';
import axios from 'axios';
import LoginForm from '../components/LoginForm.jsx';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      username: '',
      password: ''
    };

    this.processForm = this.processForm.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleUserNameChange(e) {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    event.preventDefault();

    let { username, password } = this.state;

    axios.post(`/login/${username}/${password}`).then((res) => {

      if (res.status === 200)
        window.location.replace("/");
    })
      .catch(() => {
        alert('Login faild. Wrong credentials')
      })
  }

  render() {
    return (
      <LoginForm
        onSubmit={this.processForm}
        handleUserNameChange={this.handleUserNameChange}
        handlePasswordChange={this.handlePasswordChange}
        {...this.state}
      />
    );
  }

}

export default LoginPage;
