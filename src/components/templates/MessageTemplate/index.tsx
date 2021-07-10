import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Header from '../../organisms/Header';
import StoreSelectAutocomplete from '../../organisms/StoreAutocomplete';
import EmployeeForm from '../../organisms/EmployeeAutocomplete';
import MessageForm from '../../organisms/MessageForm';
import Submit from '../../organisms/Submit';
import Snackbar from '../../organisms/Snackbar';
import { employeeType } from '../../../types/Employee';
import { storeType } from '../../../types/Store';
import { snackbarType } from '../../../types/Snackbar';

type Props = {
  selectedStore: storeType | null;
  setSelectedStore: React.Dispatch<React.SetStateAction<storeType | null>>;
  selectedEmployee: employeeType | null;
  setSelectedEmployee: React.Dispatch<
    React.SetStateAction<employeeType | null>
  >;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  snackbar: snackbarType;
  setSnackbar: React.Dispatch<React.SetStateAction<snackbarType>>;
  clearForm: () => void;
};

const header = css`
  width: 100%;
`;

const container = css`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
`;

const index: FC<Props> = ({
  selectedStore,
  setSelectedStore,
  selectedEmployee,
  setSelectedEmployee,
  message,
  setMessage,
  snackbar,
  setSnackbar,
  clearForm,
}) => (
  <>
    <header css={header}>
      <Header />
    </header>
    <main css={container}>
      <div>
        <StoreSelectAutocomplete
          selectedStore={selectedStore}
          setSelectedStore={setSelectedStore}
          setSelectedEmployee={setSelectedEmployee}
          setSnackbar={setSnackbar}
        />
      </div>
      <div>
        <EmployeeForm
          selectedStore={selectedStore}
          selectedEmployee={selectedEmployee}
          setSelectedEmployee={setSelectedEmployee}
          setSnackbar={setSnackbar}
        />
      </div>
      <div>
        <MessageForm message={message} setMessage={setMessage} />
      </div>
      <div>
        <Submit
          storeId={selectedStore?.id}
          employeeId={selectedEmployee?.id}
          message={message}
          setSnackbar={setSnackbar}
          clearForm={clearForm}
        />
      </div>
    </main>
    <Snackbar snackbar={snackbar} setSnackbar={setSnackbar} />
  </>
);

export default index;
