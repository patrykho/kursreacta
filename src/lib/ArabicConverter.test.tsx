import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import {ArabicConverter} from './ArabicConverter';

describe('<RomanConverter>', () => {
  afterEach(cleanup);

  it('has any input field', () => {
    const {getByLabelText} = render(<ArabicConverter />);
    expect(() => {
      getByLabelText(/arabic/i);
    }).not.toThrow();
  });
  it('shows no roman number by default', () => {
    const {debug, getByText} = render(<ArabicConverter />);
    expect(() => {
      getByText('Roman:');
    }).not.toThrow();
  });
  it('converts 1997 to MCMXCVII', () => {
    const {getByLabelText, getByText} = render(<ArabicConverter />);
    fireEvent.change(getByLabelText(/arabic/i), {target: {value: '1997'}});
    expect(() => {
      getByText('Roman: MCMXCVII');
    }).not.toThrow();
  });
});
