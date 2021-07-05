import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Header from '../../Organisms/Header';
import StoreNameForm from '../../Organisms/StoreNameForm';
import EmployeeForm from '../../Organisms/EmployeeForm';
import MessageForm from '../../Organisms/MessageForm';
import Submit from '../../Organisms/Submit';

type Props = {
  selectedStoreId: number;
  setSelectedStoreId: React.Dispatch<React.SetStateAction<number>>;
  selectedEmployeeId: number;
  setSelectedEmployeeId: React.Dispatch<React.SetStateAction<number>>;
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
        />
      </div>
      <div>
        <EmployeeForm
          selectedStoreId={selectedStoreId}
          setSelectedEmployeeId={setSelectedEmployeeId}
        />
      </div>
      <div>
        <MessageForm />
      </div>
      <div>
        <Submit />
      </div>
    </main>
  </>
);

export default index;
