import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import ErrorPage from '../pages/ErrorPage';
import ComplainsPage from '../pages/ComplainsPage';
import OfficersPage from '../pages/OfficersPage';

const App: React.FC = () => {
	return (
	  <React.Fragment>
		<Switch>
		  <Route exact path="/home" component={ComplainsPage} />
		  <Route exact path="/police/:id" component={OfficersPage} />
		  <Route component={ErrorPage} />
		</Switch>
	  </React.Fragment>
	);
}
  

export default App;
