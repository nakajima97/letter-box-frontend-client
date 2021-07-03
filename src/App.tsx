import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MessagePage from './components/page/MessagePage';

const App: FC = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <MessagePage />
      </Route>
      <Route path="/message/:storeId/:employeeId">
        <MessagePage />
      </Route>
    </Switch>
  </Router>
);

export default App;
