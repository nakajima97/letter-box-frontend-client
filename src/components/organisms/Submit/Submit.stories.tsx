import { FC, useState } from 'react';

import Index from './index';
import { snackbarType, defaultSnakbar } from '../../../types/Snackbar';

export default {
  component: Index,
  title: 'molecules/Submit',
};

export const Default: FC = () => {
  // eslint-disable-next-line
  const [snackbar, setSnackbar] = useState<snackbarType>(defaultSnakbar);

  return (
    <>
      <Index
        storeId={1}
        employeeId={1}
        message="sample messge"
        setSnackbar={setSnackbar}
        // eslint-disable-next-line
        clearForm={() => {}}
      />
    </>
  );
};
