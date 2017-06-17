import React from 'react';
import SignUpForm from '../components/SignUpForm.jsx';
import axios from 'axios';

class SignUpPage extends React.Component {

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

  processForm(event) {
    event.preventDefault();

    let { username, password } = this.state;

    axios.post(`/register/${username}/${password}`).then((res) => {
      if (res.status === 200) {
        alert('Successful Register. Please login to enter the wall')
      }
    })
      .catch(err => {
          alert('Registraion faild. User already exists');
      });
  }


  render() {
    return (
      <SignUpForm
        onSubmit={this.processForm}
        handleUserNameChange={this.handleUserNameChange}
        handlePasswordChange={this.handlePasswordChange}
        {...this.state}
      />
    );
  }

}

export default SignUpPage;
