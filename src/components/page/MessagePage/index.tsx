import { FC, useState } from 'react';

import MessageTemplate from '../../template/MessageTemplate';

const Index: FC = () => {
  const [selectedStoreId, setSelectedStoreId] = useState(NaN);

  return (
    <>
      <MessageTemplate
        selectedStoreId={selectedStoreId}
        setSelectedStoreId={setSelectedStoreId}
      />
    </>
  );
};

export default Index;
