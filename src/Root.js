import React, { PropTypes } from 'react';
import { Router, Route, Redirect } from 'react-router';
import * as components from './components';

const {
  Application,
  Phq9,
  Phq9Score,
  Contact
} = components;

export default class Root extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  render() {
    const { history } = this.props;
    return renderRoutes(history);
  }
}

function renderRoutes(history) {
  return (
    <Router history={history}>
      <Route component={Application}>
        <Route path="quiz">
          <Route path="phq9">
            <Route path="questions" component={Phq9} />
            <Route path="score/:score" components={Phq9Score} />
          </Route>
        </Route>
        <Route path="contact/:doctor" component={Contact} />
        <Redirect from="/" to="/quiz/phq9/questions" />
      </Route>
    </Router>
  );
}