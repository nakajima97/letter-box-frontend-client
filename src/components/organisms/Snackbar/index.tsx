import { FC } from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import { snackbarType, defaultSnakbar } from '../../../types/Snackbar';

type Props = {
  text: string | undefined;
  setText: React.Dispatch<React.SetStateAction<snackbarType>>;
};

const Index: FC<Props> = ({ text, setText }) => {
  const handleClose = () => {
    setText(defaultSnakbar);
  };

  return (
    <>
      {text && (
        <Snackbar open={!!text}>
          <Alert onClose={handleClose}>{text}</Alert>
        </Snackbar>
      )}
    </>
  );
};

export default Index;
