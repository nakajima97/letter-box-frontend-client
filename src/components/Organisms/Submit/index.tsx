import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button } from '@material-ui/core';

const style = css`
  width: 100%;
`;

const index: FC = () => (
  <>
    <Button css={style} variant="contained" color="primary">
      送信
    </Button>
  </>
);

export default index;
