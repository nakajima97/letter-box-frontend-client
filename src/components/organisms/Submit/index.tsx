import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button } from '@material-ui/core';
import axios from 'axios';

import { snackbarType } from '../../../types/Snackbar';

type Props = {
  storeId: number | undefined;
  employeeId: number | undefined;
  message: string | undefined;
  setSnackbar: React.Dispatch<React.SetStateAction<snackbarType>>;
  clearForm: () => void;
};

const style = css`
  width: 100%;
`;

const Index: FC<Props> = ({
  storeId,
  employeeId,
  message,
  setSnackbar,
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
          setSnackbar({
            type: 'success',
            text: 'メッセージを送信しました！！',
          });
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
