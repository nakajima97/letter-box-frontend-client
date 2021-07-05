import { FC, useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { employeeType } from '../../../types/Employee';

type Props = {
  selectedStoreId: number;
  setSelectedEmployeeId: React.Dispatch<React.SetStateAction<number>>;
  selectedEmployee: employeeType | null;
  setSelectedEmployee: React.Dispatch<
    React.SetStateAction<employeeType | null>
  >;
};

type apiResponse = {
  // eslint-disable-next-line
  store_id: number;
  employees: employeeType[];
};

const defaultEmployee = { id: NaN, first_name: '', last_name: '' };
const defaultEmployeees = [defaultEmployee];

const Index: FC<Props> = ({
  selectedStoreId,
  setSelectedEmployeeId,
  selectedEmployee,
  setSelectedEmployee,
}) => {
  const [employees, setEmployees] = useState<employeeType[]>(defaultEmployeees);

  const history = useHistory();

  useEffect(() => {
    if (selectedStoreId) {
      axios
        .get<apiResponse>(
          `http://localhost:3000/api/v1/employees/search?store_id=${selectedStoreId}`,
        )
        .then((res) => setEmployees(res.data.employees))
        // eslint-disable-next-line
        .catch((err) => console.log(err));
    } else {
      setEmployees(defaultEmployeees);
    }
  }, [selectedStoreId]);

  return (
    <Autocomplete
      id="disable-close-on-select"
      // disableCloseOnSelect
      options={employees}
      getOptionLabel={(option) => `${option.first_name} ${option.last_name}`}
      renderInput={(params) => (
        <TextField
          // eslint-disable-next-line
          {...params}
          label="従業員の名前"
          variant="standard"
        />
      )}
      disabled={Number.isNaN(selectedStoreId)}
      onChange={(evnet, value) => {
        if (value) {
          history.push(`/message/${selectedStoreId}/${value.id}`);
          setSelectedEmployeeId(value.id);
          setSelectedEmployee(value);
        } else if (selectedStoreId) {
          history.push(`/message/${selectedStoreId}`);
          setSelectedEmployeeId(NaN);
          setSelectedEmployee(defaultEmployee);
        } else {
          history.push(`/`);
          setSelectedEmployeeId(NaN);
          setSelectedEmployee(defaultEmployee);
        }
      }}
      value={selectedEmployee}
    />
  );
};

export default Index;
