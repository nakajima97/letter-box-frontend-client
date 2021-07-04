import { FC } from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

const stores = [
  { name: '山田 太郎', storeId: 1, employeeId: 1 },
  { name: '山田 次郎', storeId: 1, employeeId: 2 },
  { name: '山田 三郎', storeId: 1, employeeId: 3 },
];

type Props = {
  hasSelectedStore: boolean;
};

type FilmOptionType = {
  name: string;
  storeId: number;
  employeeId: number;
};

const defaultProps = {
  options: stores,
  getOptionLabel: (option: FilmOptionType) => option.name,
};

const index: FC<Props> = ({ hasSelectedStore }) => (
  <Autocomplete
    // eslint-disable-next-line
    {...defaultProps}
    id="disable-close-on-select"
    disableCloseOnSelect
    renderInput={(params) => (
      <TextField
        // eslint-disable-next-line
        {...params}
        label="従業員の名前"
        variant="standard"
      />
    )}
    disabled={!hasSelectedStore}
  />
);

export default index;
