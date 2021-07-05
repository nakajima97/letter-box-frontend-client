import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MessagePage from './components/page/MessagePage';
import NotFound from './components/page/NotFound';

const App: FC = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <MessagePage />
      </Route>
      <Route path="/message/:storeId">
        <MessagePage />
      </Route>
      <Route path="/message/:storeId/:employeeId">
        <MessagePage />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </Router>
);

export default App;
