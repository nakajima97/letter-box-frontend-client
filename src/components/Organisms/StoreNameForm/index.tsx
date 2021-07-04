import { FC, useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import axios from 'axios';

type storeType = {
  name: string;
  id: number;
};

type apiResponse = {
  data: storeType[];
};

const Index: FC = () => {
  const [stores, setStores] = useState<storeType[] | null>(null);

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
      />
    )
  );
};

export default Index;
