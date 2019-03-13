import React, { Component } from 'react';
import { withRouter, RouteComponentProps, Switch, Route } from 'react-router-dom';
import SearchUsers from './SearchUsers';
import { NotFound } from './NotFound';

class App extends Component<RouteComponentProps<any>> {
  render() {
    return (
      <div className="App">
        <Switch>
        <Route exact={true} path={'/'} component={SearchUsers} />
        <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
