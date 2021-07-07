import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button } from '@material-ui/core';
import axios from 'axios';

type Props = {
  storeId: number | undefined;
  employeeId: number | undefined;
  message: string | undefined;
  setSnackbarText: React.Dispatch<React.SetStateAction<string>>;
  clearForm: () => void;
};

const style = css`
  width: 100%;
`;

const Index: FC<Props> = ({
  storeId,
  employeeId,
  message,
  setSnackbarText,
  clearForm,
}) => {
  const isSendable = () => !!(storeId && employeeId && message);

  const submitMessage = () => {
    if (storeId && employeeId && message) {
      const params = new URLSearchParams();
      params.append('store_id', storeId.toString());
      params.append('employee_id', employeeId.toString());
      params.append('message_text', message);

      axios
        .post('http://localhost:3000/api/v1/messages', params)
        .then(() => {
          setSnackbarText('投稿に成功しました');
          clearForm();
        })
        // eslint-disable-next-line
        .catch((err) => err);
    }
  };

  return (
    <>
      <Button
        css={style}
        variant="contained"
        color="primary"
        disabled={!isSendable()}
        onClick={submitMessage}
      >
        送信
      </Button>
    </>
  );
};

export default Index;
