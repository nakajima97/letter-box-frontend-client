import { FC } from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import { snackbarType, defaultSnackbar } from '../../../types/Snackbar';

type Props = {
  snackbar: snackbarType;
  setSnackbar: React.Dispatch<React.SetStateAction<snackbarType>>;
};

const Index: FC<Props> = ({ snackbar, setSnackbar }) => {
  const handleClose = () => {
    setSnackbar(defaultSnackbar);
  };

  return (
    <>
      {snackbar.text && (
        <Snackbar open={!!snackbar.text}>
          <Alert severity={snackbar.type} onClose={handleClose}>
            {snackbar.text}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default Index;
