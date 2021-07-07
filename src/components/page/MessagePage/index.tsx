import { FC, useState } from 'react';

import MessageTemplate from '../../template/MessageTemplate';
import { employeeType } from '../../../types/Employee';

const defaultEmployee = { id: NaN, first_name: '', last_name: '' };

const Index: FC = () => {
  const [selectedStoreId, setSelectedStoreId] = useState(NaN);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(NaN);
  const [selectedEmployee, setSelectedEmployee] = useState<employeeType | null>(
    defaultEmployee,
  );
  const [message, setMessage] = useState('');
  const [snackbarText, setSnackbarText] = useState('');

  return (
    <>
      <MessageTemplate
        selectedStoreId={selectedStoreId}
        setSelectedStoreId={setSelectedStoreId}
        selectedEmployeeId={selectedEmployeeId}
        setSelectedEmployeeId={setSelectedEmployeeId}
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
