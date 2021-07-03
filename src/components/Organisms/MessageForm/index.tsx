import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { TextField } from '@material-ui/core';

const style = css`
  width: 100%;
`;

const index: FC = () => (
  <>
    <TextField
      css={style}
      label="メッセージ入力欄"
      helperText="感謝のメッセージを入れてください"
      multiline
      rows={12}
    />
  </>
);

export default index;
