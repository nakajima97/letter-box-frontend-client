import { FC, useState } from 'react';
import Index from '.';

import { snackbarType } from '../../../types/Snackbar';

export default {
  component: Index,
  title: 'molecules/Snackbar',
};

const successSnackbar: snackbarType = {
  type: 'success',
  text: 'メッセージの送信に成功',
};

const failureSnackbar: snackbarType = {
  type: 'error',
  text: 'エラーが発生しました',
};

export const Default: FC = () => {
  const [snackbar, setSnackbar] = useState<snackbarType>(successSnackbar);

  return <Index snackbar={snackbar} setSnackbar={setSnackbar} />;
};

export const Error: FC = () => {
  const [snackbar, setSnackbar] = useState<snackbarType>(failureSnackbar);

  return <Index snackbar={snackbar} setSnackbar={setSnackbar} />;
};
