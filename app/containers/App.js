// @flow
import * as React from 'react';
import AppBar from '@civicplus/preamble/lib/AppBar';
import Toolbar from '@civicplus/preamble/lib/Toolbar';
import Menu from '@civicplus/preamble/lib/Menu';
import cpLogo32 from '../images/favicon-32.png';

type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <AppBar id="app-bar" position="static" color="default">
          <Toolbar id="app-toolbar">
            <Menu
              id="app-toolbar-menu"
              type="action"
              headerText="CivicPlus HCMS"
              items={[
                {
                  display: 'Login',
                  action: () => {
                    console.log('login menu btn pressed');
                  }
                }
              ]}
            />
            <img src={cpLogo32} alt="CivicPlus Logo" />
          </Toolbar>
        </AppBar>
        {children}
      </React.Fragment>
    );
  }
}
