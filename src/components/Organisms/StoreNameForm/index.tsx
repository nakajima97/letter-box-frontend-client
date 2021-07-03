import { FC } from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

const stores = [
  { name: 'The Shawshank Redemption', id: 1994 },
  { name: 'The Godfather', id: 1972 },
  { name: 'The Godfather: Part II', id: 1974 },
];

interface FilmOptionType {
  name: string;
  id: number;
}

const index: FC = () => {
  const defaultProps = {
    options: stores,
    getOptionLabel: (option: FilmOptionType) => option.name,
  };

  return (
    <Autocomplete
      // eslint-disable-next-line
      {...defaultProps}
      id="disable-close-on-select"
      disableCloseOnSelect
      renderInput={(params) => (
        <TextField
          // eslint-disable-next-line
          {...params}
          label="店名"
          variant="standard"
        />
      )}
    />
  );
};

export default index;
