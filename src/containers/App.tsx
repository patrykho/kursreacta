import React from 'react';

import {TimeboxList} from './TimeboxList';

import EditableTimebox from '../components/EditableTimebox';
import {ArabicConverter} from '../lib/ArabicConverter';

const App = () => {
  return (
    <div className='root'>
      <ArabicConverter />
      <TimeboxList />
      <EditableTimebox />
    </div>
  );
};
export default App;
