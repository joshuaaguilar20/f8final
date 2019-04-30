import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from '../history';

import AdminLayout from './layouts/Admin/Admin';
import RTLLayout from "./layouts/RTL/RTL.jsx";
import "./assets/demo/demo.css";
import "./assets/css/nucleo-icons.css";
import Test from './test';
import Translate from '../helpers/translate';

class App extends React.Component {

  /* DO NOT DELETE OUR ROUTES****  */
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Switch>
              <Route path="/rtl" render={props => <RTLLayout {...props} />} />
              <Route path="/test" exact component={Test} />
              <Route path="/translate" exact component={Translate} />
              <Route path='/admin' render={props => <AdminLayout {...props} />} />
              <Redirect from="/" to="/admin/typography" />
            </Switch>
          </div>
        </Router>
      </div>
    );
  };
}


export default App