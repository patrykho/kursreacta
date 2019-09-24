import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import EditableTimebox from './EditableTimebox';

describe('<EditableTimebox>', () => {
  afterEach(cleanup);
  it('show edit button', async () => {
    const {debug, getByText} = render(<EditableTimebox />);
    expect(() => {
      getByText('EDIT');
    });
  });
  it('should ', () => {
    const {debug, getByText} = render(<EditableTimebox />);
    debug();
    fireEvent.click(getByText('EDIT'));
    debug();
    expect(() => {
      getByText('EDIT');
    });
  });
});
