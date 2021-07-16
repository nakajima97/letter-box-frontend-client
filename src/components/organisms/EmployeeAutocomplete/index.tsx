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
  selectedEmployee: employeeType | null;
  setSelectedEmployee: React.Dispatch<
    React.SetStateAction<employeeType | null>
  >;
  setSnackbar: React.Dispatch<React.SetStateAction<snackbarType>>;
};

type apiResponse = {
  // eslint-disable-next-line
  store_id: number;
  employees: employeeType[];
};

const defaultEmployee = { id: NaN, first_name: '', last_name: '' };
const defaultEmployees = [defaultEmployee];

const Index: FC<Props> = ({
  selectedStore,
  selectedEmployee,
  setSelectedEmployee,
  setSnackbar,
}) => {
  const [employees, setEmployees] = useState<employeeType[]>(defaultEmployees);

  const {
    employeeId,
    storeId,
  }: { employeeId: string | undefined; storeId: string | undefined } =
    useParams();

  const history = useHistory();

  // 従業員一覧を取得する
  useEffect(() => {
    if (selectedStore?.id) {
      axios
        .get<apiResponse>(
          `http://localhost:3000/api/v1/employees/search?store_id=${selectedStore.id}`,
        )
        .then((res) => setEmployees(res.data.employees))
        .catch(() =>
          setSnackbar({
            type: 'error',
            text: '従業員一覧の取得に失敗しました。時間をおいて再度アクセスしてください。',
          }),
        );
    } else {
      setEmployees(defaultEmployees);
    }
  }, [selectedStore, setSnackbar]);

  // paramに設定された従業員IDをもとに従業員検索をする
  useEffect(() => {
    if (employeeId && employees) {
      const employee = employees.find((e) => e.id.toString() === employeeId);
      if (employee) {
        setSelectedEmployee(employee);
      } else if (storeId) {
        history.push(`/message/${storeId}`);
        setSnackbar({
          type: 'error',
          text: '存在しない従業員IDがURLに設定されました',
        });
      } else {
        history.push(`/`);
        setSnackbar({
          type: 'error',
          text: '存在しない店舗IDがURLに設定されました',
        });
      }
    }
  }, [
    employees,
    employeeId,
    setSelectedEmployee,
    storeId,
    history,
    setSnackbar,
  ]);

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
      disabled={selectedStore ? Number.isNaN(selectedStore.id) : true}
      onChange={(event, value) => {
        if (value && selectedStore) {
          history.push(`/message/${selectedStore.id}/${value.id}`);
          setSelectedEmployee(value);
        } else if (selectedStore) {
          history.push(`/message/${selectedStore.id}`);
          setSelectedEmployee(defaultEmployee);
        } else {
          history.push(`/`);
          setSelectedEmployee(defaultEmployee);
        }
      }}
      value={selectedEmployee}
    />
  );
};

export default Index;
