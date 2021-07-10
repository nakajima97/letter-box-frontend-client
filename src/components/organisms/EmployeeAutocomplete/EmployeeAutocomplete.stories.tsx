import { FC, useState } from 'react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';

import Index from '.';
import responseData from './MockAPIServerResponseData';
import { storeType } from '../../../types/Store';
import { employeeType } from '../../../types/Employee';
import { snackbarType, defaultSnakbar } from '../../../types/Snackbar';

export default {
  component: Index,
  title: 'molecules/EmployeeSelectAutocomplete',
  decorators: [
    (story: () => JSX.Element): JSX.Element => <Router>{story()}</Router>,
  ],
};

const defaultStore: storeType = {
  id: 1,
  name: 'セブンイレブン',
};

export const Default: FC = () => {
  // eslint-disable-next-line
  const [selectedStore, setSelectedStore] = useState<storeType | null>(
    defaultStore,
  );
  const [selectedEmployee, setSelectedEmployee] = useState<employeeType | null>(
    null,
  );
  // eslint-disable-next-line
  const [snackbar, setSnackbar] = useState<snackbarType>(defaultSnakbar);

  const mock = new MockAdapter(axios);

  mock
    .onGet('http://localhost:3000/api/v1/employees/search?store_id=1')
    .reply(200, responseData);

  return (
    <Index
      selectedStore={selectedStore}
      selectedEmployee={selectedEmployee}
      setSelectedEmployee={setSelectedEmployee}
      setSnackbar={setSnackbar}
    />
  );
};
