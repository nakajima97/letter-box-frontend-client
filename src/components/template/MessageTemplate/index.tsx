import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Header from '../../Organisms/Header';
import StoreNameForm from '../../Organisms/StoreNameForm';
import EmployeeForm from '../../Organisms/EmployeeForm';
import MessageForm from '../../Organisms/MessageForm';
import Submit from '../../Organisms/Submit';

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

const index: FC = () => (
  <>
    <header css={header}>
      <Header />
    </header>
    <main css={container}>
      <div>
        <StoreNameForm />
      </div>
      <div>
        <EmployeeForm />
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
