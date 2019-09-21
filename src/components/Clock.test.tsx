import React from 'react';

import {Clock} from './Clock';

describe('<Clock', () => {
  it('renders properly when given minutes and seconds', () => {
    expect(<Clock minutes={10} seconds={15} />);
  });
});
