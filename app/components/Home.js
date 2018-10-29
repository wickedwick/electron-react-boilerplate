// @flow
import React, { Component } from 'react';
import Button from '@civicplus/preamble/lib/Button';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';
import cpLogo from '../images/CP.png';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <img src={cpLogo} alt="CivicPlus Logo" />
        <h2>Welcome</h2>
        <Button id="login-btn" color="default">
          <Link to={routes.LOGIN}>Login</Link>
        </Button>
        <br />
        <Button id="login-btn" color="primary">
          <Link to={routes.CONTENTLIST}>Article Content Items</Link>
        </Button>
      </div>
    );
  }
}
