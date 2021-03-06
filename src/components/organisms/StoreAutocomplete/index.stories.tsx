import { FC, useState } from 'react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

import Index from '.';
import { employeeType } from '../../../types/Employee';
import { storeType } from '../../../types/Store';
import { snackbarType, defaultSnackbar } from '../../../types/Snackbar';
import responseData from './MockApiServerResponseData';

const queryClient = new QueryClient();

export default {
  component: Index,
  title: 'molecules/StoreSelectAutocomplete',
  decorators: [
    (story: () => JSX.Element): JSX.Element => (
      <QueryClientProvider client={queryClient}>
        <Router>{story()}</Router>
      </QueryClientProvider>
    ),
  ],
};

const defaultEmployee = { id: NaN, first_name: '', last_name: '' };

const mock = new MockAdapter(axios);

export const Default: FC = () => {
  // eslint-disable-next-line
  const [selectedStore, setSelectedStore] = useState<storeType | null>(null);
  // eslint-disable-next-line
  const [selectedEmployee, setSelectedEmployee] = useState<employeeType | null>(
    defaultEmployee,
  );
  // eslint-disable-next-line
  const [snackbar, setSnackbar] = useState<snackbarType>(defaultSnackbar);

  mock
    .onGet('http://localhost:3000/api/v1/stores?count=50')
    .reply(200, responseData);

  return (
    <Index
      setSelectedStore={setSelectedStore}
      setSelectedEmployee={setSelectedEmployee}
      selectedStore={selectedStore}
      setSnackbar={setSnackbar}
    />
  );
};
