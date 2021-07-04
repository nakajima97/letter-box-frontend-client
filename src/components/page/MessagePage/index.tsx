import { FC, useState } from 'react';

import MessageTemplate from '../../template/MessageTemplate';

const Index: FC = () => {
  const [hasSelectedStore, setHasSelectedStore] = useState(false);

  return (
    <>
      <MessageTemplate
        hasSelectedStore={hasSelectedStore}
        setHasSelectedStore={setHasSelectedStore}
      />
    </>
  );
};

export default Index;
