import React from 'react';

import {TimeboxList} from './TimeboxList';

import EditableTimebox from '../components/EditableTimebox';

const App = () => {
  return (
    <div className='root'>
      <TimeboxList />
      <EditableTimebox />
    </div>
  );
};
export default App;
