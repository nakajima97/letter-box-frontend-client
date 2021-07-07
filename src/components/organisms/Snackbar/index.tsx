import { FC } from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

type Props = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

const Index: FC<Props> = ({ text, setText }) => {
  const handleClose = () => {
    setText('');
  };

  return (
    <>
      <Snackbar open={!!text}>
        <Alert onClose={handleClose}>{text}</Alert>
      </Snackbar>
    </>
  );
};

export default Index;
