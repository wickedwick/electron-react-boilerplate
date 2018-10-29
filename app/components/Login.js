import React, { Component } from 'react';
import TextInput from '@civicplus/preamble/lib/TextInput';
import Button from '@civicplus/preamble/lib/Button';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Login.css';

type Props = {};

export default class Login extends Component<Props> {
  props: Props;

  state = {
    email: '',
    password: ''
  };

  handleOnClick = () => {
    console.log('Login clicked');
    const { email, password } = this.state;
    if (!email || !password) {
      console.log('Validation!!!!!');
    }

    // call auth
  };

  handleEmailOnChange = e => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChage = e => {
    this.setState({ password: e.target.value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <React.Fragment>
        <div className={styles.backButton} data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={styles.container}>
          <h2>Login</h2>
          <TextInput
            id="emailAddress"
            value={email}
            onChange={this.handleEmailOnChange}
            label="Email Address"
            required
          />
          <br />
          <TextInput
            id="password"
            type="password"
            value={password}
            onChange={this.handlePasswordChage}
            label="Password"
            required
          />
          <br />
          <Button onClick={this.handleOnClick} id="login-btn" color="default">
            Submit
          </Button>
        </div>
      </React.Fragment>
    );
  }
}
