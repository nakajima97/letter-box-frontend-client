import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Header from '../../Organisms/Header';
import StoreNameForm from '../../Organisms/StoreSelectAutocomplete';
import EmployeeForm from '../../Organisms/EmployeeSelectAutocomplete';
import MessageForm from '../../Organisms/MessageForm';
import Submit from '../../Organisms/Submit';
import Snackbar from '../../Organisms/Snackbar';
import { employeeType } from '../../../types/Employee';

type Props = {
  selectedStoreId: number;
  setSelectedStoreId: React.Dispatch<React.SetStateAction<number>>;
  selectedEmployeeId: number;
  setSelectedEmployeeId: React.Dispatch<React.SetStateAction<number>>;
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
  setSelectedStoreId,
  selectedStoreId,
  setSelectedEmployeeId,
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
        <StoreNameForm
          setSelectedStoreId={setSelectedStoreId}
          setSelectedEmployeeId={setSelectedEmployeeId}
          setSelectedEmployee={setSelectedEmployee}
        />
      </div>
      <div>
        <EmployeeForm
          selectedStoreId={selectedStoreId}
          setSelectedEmployeeId={setSelectedEmployeeId}
          selectedEmployee={selectedEmployee}
          setSelectedEmployee={setSelectedEmployee}
        />
      </div>
      <div>
        <MessageForm message={message} setMessage={setMessage} />
      </div>
      <div>
        <Submit
          storeId={selectedStoreId}
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
