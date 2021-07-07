import { FC, useState } from 'react';

import MessageTemplate from '../../template/MessageTemplate';
import { storeType } from '../../../types/Store';
import { employeeType } from '../../../types/Employee';

const defaultEmployee = { id: NaN, first_name: '', last_name: '' };
const defaultStore = { id: NaN, name: '' };

const Index: FC = () => {
  const [selectedStore, setSelectedStore] = useState<storeType | null>(
    defaultStore,
  );
  const [selectedEmployee, setSelectedEmployee] = useState<employeeType | null>(
    defaultEmployee,
  );
  const [message, setMessage] = useState('');
  const [snackbarText, setSnackbarText] = useState('');

  return (
    <>
      <MessageTemplate
        selectedStore={selectedStore}
        setSelectedStore={setSelectedStore}
        selectedEmployee={selectedEmployee}
        setSelectedEmployee={setSelectedEmployee}
        message={message}
        setMessage={setMessage}
        snackbarText={snackbarText}
        setSnackbarText={setSnackbarText}
      />
    </>
  );
};

export default Index;
