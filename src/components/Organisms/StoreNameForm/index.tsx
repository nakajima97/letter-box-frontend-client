import { FC, useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { employeeType } from '../../../types/Employee';

type Props = {
  setSelectedStoreId: React.Dispatch<React.SetStateAction<number>>;
  setSelectedEmployeeId: React.Dispatch<React.SetStateAction<number>>;
  setSelectedEmployee: React.Dispatch<
    React.SetStateAction<employeeType | null>
  >;
};

type storeType = {
  name: string;
  id: number;
};

type apiResponse = {
  data: storeType[];
};

const defaultEmployee = { id: NaN, first_name: '', last_name: '' };

const Index: FC<Props> = ({
  setSelectedStoreId,
  setSelectedEmployeeId,
  setSelectedEmployee,
}) => {
  const [stores, setStores] = useState<storeType[] | null>(null);

  const history = useHistory();

  useEffect(() => {
    axios
      .get<apiResponse>(`http://localhost:3000/api/v1/stores?count=50`)
      .then((res) => setStores(res.data.data))
      // eslint-disable-next-line
      .catch((error) => console.log(error));
  }, []);

  return (
    stores && (
      <Autocomplete
        options={stores}
        id="disable-close-on-select"
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField
            // eslint-disable-next-line
            {...params}
            label="店名"
            variant="standard"
          />
        )}
        onChange={(event, value) => {
          setSelectedStoreId(value === null ? NaN : value.id);
          setSelectedEmployeeId(NaN);
          if (value) {
            history.push(`/message/${value.id}`);
          } else {
            history.push(`/`);
            setSelectedEmployee(defaultEmployee);
          }
        }}
      />
    )
  );
};

export default Index;
