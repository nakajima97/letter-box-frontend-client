import { FC } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const index: FC = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">Letter Box</Typography>
    </Toolbar>
  </AppBar>
);

export default index;
