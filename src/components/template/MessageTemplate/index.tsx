import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Header from '../../Organisms/Header';
import StoreSelectAutocomplete from '../../Organisms/StoreSelectAutocomplete';
import EmployeeForm from '../../Organisms/EmployeeSelectAutocomplete';
import MessageForm from '../../Organisms/MessageForm';
import Submit from '../../Organisms/Submit';
import Snackbar from '../../Organisms/Snackbar';
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
}) => (
  <>
    <header css={header}>
      <Header />
    </header>
    <main css={container}>
      <div>
        <StoreSelectAutocomplete
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
        />
      </div>
    </main>
    <Snackbar text={snackbarText} setText={setSnackbarText} />
  </>
);

export default index;
