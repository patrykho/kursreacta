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
  it('should change task to new value ', () => {
    const {debug, getByText, getByDisplayValue} = render(<EditableTimebox />);

    fireEvent.change(getByDisplayValue('Uczę się skrótów klawiszowych'), {
      target: {
        value: 'Write some test',
      },
    });

    fireEvent.click(getByText('Zatwierdź zmiany'));

    expect(() => {
      getByText('Write some test');
    });
  });
});
