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

  return (
    <>
      <MessageTemplate
        selectedStoreId={selectedStoreId}
        setSelectedStoreId={setSelectedStoreId}
        selectedEmployeeId={selectedEmployeeId}
        setSelectedEmployeeId={setSelectedEmployeeId}
        selectedEmployee={selectedEmployee}
        setSelectedEmployee={setSelectedEmployee}
      />
    </>
  );
};

export default Index;
