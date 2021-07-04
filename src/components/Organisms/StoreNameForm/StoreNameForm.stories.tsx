import { FC, useState } from 'react';
import Index from '.';

export default {
  component: Index,
  title: 'molecules/StoreNameForm',
};

export const Default: FC = () => {
  // eslint-disable-next-line
  const [hasSelectedStore, setHasSelectedStore] = useState(false);

  return <Index setHasSelectedStore={setHasSelectedStore} />;
};
