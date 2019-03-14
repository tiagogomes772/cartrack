import { withRouter, RouteComponentProps, Switch, Route } from 'react-router-dom';
import SearchUsers from './SearchUsers';
import { NotFound } from '../components/NotFound/NotFound';
import React from 'react';

class App extends React.Component<RouteComponentProps<any>> {
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
