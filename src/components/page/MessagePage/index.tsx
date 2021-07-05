import { FC, useState } from 'react';

import MessageTemplate from '../../template/MessageTemplate';

const Index: FC = () => {
  const [selectedStoreId, setSelectedStoreId] = useState(NaN);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(NaN);

  return (
    <>
      <MessageTemplate
        selectedStoreId={selectedStoreId}
        setSelectedStoreId={setSelectedStoreId}
        selectedEmployeeId={selectedEmployeeId}
        setSelectedEmployeeId={setSelectedEmployeeId}
      />
    </>
  );
};

export default Index;
