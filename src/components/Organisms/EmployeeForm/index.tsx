import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { TextField } from '@material-ui/core';

const style = css`
  width: 100%;
`;

const index: FC = () => (
  <>
    <TextField css={style} label="従業員" />
  </>
);

export default index;
