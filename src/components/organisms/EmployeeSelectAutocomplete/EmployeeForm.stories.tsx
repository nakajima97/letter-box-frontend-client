// import { FC, useState } from 'react';
// import MockAdapter from 'axios-mock-adapter';
// import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';

import Index from '.';
// import responseData from './MockAPIServerResponseData';
// import { employeeType } from '../../../types/Employee';

export default {
  component: Index,
  title: 'molecules/EmployeeSelectAutocomplete',
  decorators: [
    (story: () => JSX.Element): JSX.Element => <Router>{story()}</Router>,
  ],
};

// const mock = new MockAdapter(axios);

// // export const Default: FC = () => {
// //   const [selectedStoreId, setSelectedEmployeeId] = useState(1);
// //   const [selectedEmployee, setSelectedEmployee] = useState<employeeType | null>(
// //     { id: NaN, first_name: '', last_name: '' },
// //   );

// //   mock
// //     .onGet('http://localhost:3000/api/v1/employees/search?store_id=1')
// //     .reply(200, responseData);

// //   return (
// //     <Index
// //       selectedStoreId={selectedStoreId}
// //       setSelectedEmployeeId={setSelectedEmployeeId}
// //       selectedEmployee={selectedEmployee}
// //       setSelectedEmployee={setSelectedEmployee}
// //     />
// //   );
// // };
