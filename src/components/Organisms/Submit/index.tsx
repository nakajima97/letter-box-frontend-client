import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button } from '@material-ui/core';
// import axios from 'axios';

type Props = {
  storeId: number | undefined;
  employeeId: number | undefined;
  message: string | undefined;
};

const style = css`
  width: 100%;
`;

const Index: FC<Props> = ({ storeId, employeeId, message }) => {
  const isSendable = () => !!(storeId && employeeId && message);

  return (
    <>
      <Button
        css={style}
        variant="contained"
        color="primary"
        disabled={!isSendable()}
      >
        送信
      </Button>
    </>
  );
};

export default Index;
