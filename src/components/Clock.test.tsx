import React from 'react';
import ReactDOM from 'react-dom';

import {Clock} from './Clock';

var root: any = null;
describe('<Clock', () => {
  beforeEach(() => {
    root = document.createElement('div');
    ReactDOM.render(
      <Clock className={'inactive'} minutes={10} seconds={15} />,
      root,
    );
  });
  it('renders properly when given minutes and seconds', () => {
    expect(root.childNodes[0].nodeName).toEqual('H2');
  });
});
