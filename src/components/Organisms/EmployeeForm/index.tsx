import { FC, useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import axios from 'axios';

type Props = {
  selectedStoreId: number;
};

type employeeType = {
  id: number;
  // eslint-disable-next-line
  first_name: string;
  // eslint-disable-next-line
  last_name: string;
};

type apiResponse = {
  // eslint-disable-next-line
  store_id: number;
  employees: employeeType[];
};

const Index: FC<Props> = ({ selectedStoreId }) => {
  const [employees, setEmployees] = useState<employeeType[] | null>(null);

  useEffect(() => {
    axios
      .get<apiResponse>(
        `http://localhost:3000/api/v1/employees/search?store_id=${selectedStoreId}`,
      )
      .then((res) => setEmployees(res.data.employees))
      // eslint-disable-next-line
      .catch((err) => console.log(err));
  }, [selectedStoreId]);

  return (
    <Autocomplete
      id="disable-close-on-select"
      disableCloseOnSelect
      options={employees ?? [{ id: NaN, first_name: '', last_name: '' }]}
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
    />
  );
};

export default Index;
