import { FC, useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

import { employeeType } from '../../../types/Employee';
import { storeType } from '../../../types/Store';
import { snackbarType } from '../../../types/Snackbar';

type Props = {
  selectedStore: storeType | null;
  setSelectedStore: React.Dispatch<React.SetStateAction<storeType | null>>;
  setSelectedEmployee: React.Dispatch<
    React.SetStateAction<employeeType | null>
  >;
  setSnackbar: React.Dispatch<React.SetStateAction<snackbarType>>;
};

type apiResponse = {
  data: storeType[];
};

const defaultEmployee = { id: NaN, first_name: '', last_name: '' };

const Index: FC<Props> = ({
  setSelectedStore,
  setSelectedEmployee,
  selectedStore,
  setSnackbar,
}) => {
  const [stores, setStores] = useState<storeType[] | null>(null);

  const history = useHistory();

  const { storeId }: { storeId: string | undefined } = useParams();

  useEffect(() => {
    axios
      .get<apiResponse>(`http://localhost:3000/api/v1/stores?count=50`)
      .then((res) => {
        setStores(res.data.data);
      })
      .catch(() =>
        setSnackbar({
          type: 'error',
          text: '店舗一覧の取得に失敗しました。時間をおいてアクセスしてください。',
        }),
      );
  }, [setSnackbar]);

  useEffect(() => {
    if (stores && storeId) {
      const store = stores.find((s) => s.id.toString() === storeId);
      if (store) {
        setSelectedStore(store);
      } else {
        history.push('/');
        setSnackbar({
          type: 'error',
          text: '存在しない店舗IDがURLに設定されました',
        });
      }
    }
  }, [storeId, stores, setSelectedStore, history, setSnackbar]);

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
          setSelectedStore(value ?? null);
          setSelectedEmployee(defaultEmployee);
          if (value) {
            history.push(`/message/${value.id}`);
          } else {
            history.push(`/`);
            setSelectedEmployee(defaultEmployee);
          }
        }}
        value={selectedStore}
      />
    )
  );
};

export default Index;
