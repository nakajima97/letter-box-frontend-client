import { FC, useState } from 'react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

import Index from './index';
import { snackbarType, defaultSnakbar } from '../../../types/Snackbar';

const mock = new MockAdapter(axios);

export default {
  component: Index,
  title: 'molecules/Submit',
};

export const Default: FC = () => {
  // eslint-disable-next-line
  const [snackbar, setSnackbar] = useState<snackbarType>(defaultSnakbar);

  mock.onPost('http://localhost:3000/api/v1/messages', {
    store_id: 1,
    employee_id: 1,
    message_text: 'sample message',
  });

  return (
    <Index
      storeId={1}
      employeeId={1}
      message="sample messge"
      setSnackbar={setSnackbar}
      // eslint-disable-next-line
      clearForm={() => {}}
    />
  );
};
