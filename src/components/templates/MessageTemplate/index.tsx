import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Header from '../../organisms/Header';
import StoreSelectAutocomplete from '../../organisms/StoreSelectAutocomplete';
import EmployeeForm from '../../organisms/EmployeeSelectAutocomplete';
import MessageForm from '../../organisms/MessageForm';
import Submit from '../../organisms/Submit';
import Snackbar from '../../organisms/Snackbar';
import { employeeType } from '../../../types/Employee';
import { storeType } from '../../../types/Store';

type Props = {
  selectedStore: storeType | null;
  setSelectedStore: React.Dispatch<React.SetStateAction<storeType | null>>;
  selectedEmployee: employeeType | null;
  setSelectedEmployee: React.Dispatch<
    React.SetStateAction<employeeType | null>
  >;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  snackbarText: string;
  setSnackbarText: React.Dispatch<React.SetStateAction<string>>;
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
  snackbarText,
  setSnackbarText,
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
        />
      </div>
      <div>
        <EmployeeForm
          selectedStore={selectedStore}
          selectedEmployee={selectedEmployee}
          setSelectedEmployee={setSelectedEmployee}
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
          setSnackbarText={setSnackbarText}
          clearForm={clearForm}
        />
      </div>
    </main>
    <Snackbar text={snackbarText} setText={setSnackbarText} />
  </>
);

export default index;
