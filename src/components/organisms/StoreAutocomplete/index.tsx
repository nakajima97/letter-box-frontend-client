import { FC, useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

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
  const [keyword, setKeyword] = useState('');

  const history = useHistory();

  const { storeId }: { storeId: string | undefined } = useParams();

  const { data } = useQuery(['getStores', { keyword }], () =>
    axios
      .get<apiResponse>(
        keyword
          ? `http://localhost:3000/api/v1/stores/search?keyword=${keyword}`
          : 'http://localhost:3000/api/v1/stores?count=100',
      )
      .then((res) => res.data.data)
      .catch(() =>
        setSnackbar({
          type: 'error',
          text: '店舗一覧の取得に失敗しました。時間をおいてアクセスしてください。',
        }),
      ),
  );

  useEffect(() => {
    if (data) {
      setStores(data);
    }
  }, [data]);

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
    // eslint-disable-next-line
  }, [storeId]);

  return (
    stores && (
      <Autocomplete
        className="stores-autocomplete"
        options={stores}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField
            // eslint-disable-next-line
            {...params}
            label="店名"
            variant="standard"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
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
