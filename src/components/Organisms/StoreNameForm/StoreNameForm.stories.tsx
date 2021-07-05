import { FC, useState } from 'react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';

import Index from '.';
import { employeeType } from '../../../types/Employee';
import responseData from './MockApiServerResponseData';

export default {
  component: Index,
  title: 'molecules/StoreNameForm',
  decorators: [
    (story: () => JSX.Element): JSX.Element => <Router>{story()}</Router>,
  ],
};

const defaultEmployee = { id: NaN, first_name: '', last_name: '' };

const mock = new MockAdapter(axios);

export const Default: FC = () => {
  // eslint-disable-next-line
  const [selectedStoreId, setSelectedStoreId] = useState(1);
  // eslint-disable-next-line
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(1);
  // eslint-disable-next-line
  const [selectedEmployee, setSelectedEmployee] = useState<employeeType | null>(
    defaultEmployee,
  );

  mock
    .onGet('http://localhost:3000/api/v1/stores?count=50')
    .reply(200, responseData);

  return (
    <Index
      setSelectedStoreId={setSelectedStoreId}
      setSelectedEmployeeId={setSelectedEmployeeId}
      setSelectedEmployee={setSelectedEmployee}
    />
  );
};
