import { FC, useState } from 'react';

import MessageTemplate from '../../templates/MessageTemplate';
import { storeType } from '../../../types/Store';
import { employeeType } from '../../../types/Employee';
import { snackbarType, defaultSnackbar } from '../../../types/Snackbar';

const defaultStore = { id: NaN, name: '' };
const defaultEmployee = { id: NaN, first_name: '', last_name: '' };

const Index: FC = () => {
  const [selectedStore, setSelectedStore] = useState<storeType | null>(
    defaultStore,
  );
  const [selectedEmployee, setSelectedEmployee] = useState<employeeType | null>(
    defaultEmployee,
  );
  const [message, setMessage] = useState('');
  const [snackbar, setSnackbar] = useState<snackbarType>(defaultSnackbar);

  const clearForm = () => {
    setSelectedStore(defaultStore);
    setSelectedEmployee(defaultEmployee);
    setMessage('');
  };

  return (
    <>
      <MessageTemplate
        selectedStore={selectedStore}
        setSelectedStore={setSelectedStore}
        selectedEmployee={selectedEmployee}
        setSelectedEmployee={setSelectedEmployee}
        message={message}
        setMessage={setMessage}
        snackbar={snackbar}
        setSnackbar={setSnackbar}
        clearForm={clearForm}
      />
    </>
  );
};

export default Index;
