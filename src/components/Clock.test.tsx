import React from 'react';
import ReactDOM from 'react-dom';

import {Clock} from './Clock';

var root: any = null;
describe('<Clock', () => {
  describe('Given minutes and seconds', () => {
    beforeEach(() => {
      root = document.createElement('div');
      ReactDOM.render(
        <Clock className={'inactive'} minutes={10} seconds={16} />,
        root,
      );
    });
    it('then renders H2', () => {
      expect(root.childNodes[0].nodeName).toEqual('H2');
    });
    it('then renders classNames clock inactive ', () => {
      expect(root.childNodes[0].className).toMatch(/clock inactive/);
    });
    it('then renders time 10:16 ', () => {
      expect(root.childNodes[0].textContent).toMatch(/10:16/);
    });

    it('then renders Pozostało', () => {
      expect(root.childNodes[0].textContent).toMatch(/Pozostało/);
    });
  });
});
