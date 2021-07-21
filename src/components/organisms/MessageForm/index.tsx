import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { TextField } from '@material-ui/core';

type Props = {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
};

const style = css`
  width: 100%;
`;

const Index: FC<Props> = ({ message, setMessage }) => (
  <>
    <TextField
      className="message-form"
      css={style}
      label="メッセージ入力欄"
      helperText="感謝のメッセージを入れてください"
      multiline
      rows={12}
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    />
  </>
);

export default Index;
