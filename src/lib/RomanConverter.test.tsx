import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import {RomanConverter} from './RomanConverter';

describe('<RomanConverter>', () => {
  afterEach(cleanup);

  it('has any input field', () => {
    const {getByLabelText} = render(<RomanConverter />);
    expect(() => {
      getByLabelText(/arabic/i);
    }).not.toThrow();
  });
  it('shows no roman number by default', () => {
    const {debug, getByText} = render(<RomanConverter />);
    expect(() => {
      getByText('Roman:');
    }).not.toThrow();
  });
  it.skip('converts 1997 to MCMXCVII', () => {
    const {getByLabelText, getByText} = render(<RomanConverter />);
    fireEvent.change(getByLabelText(/arabic/i), {target: {value: '1997'}});
    expect(() => {
      getByText('Roman: MCMXCVII');
    }).not.toThrow();
  });
});
