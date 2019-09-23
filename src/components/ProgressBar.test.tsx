import React from 'react';
import ReactDOM from 'react-dom';


import {ProgressBar} from './ProgressBar';

var root: any = null;
describe('<ProgressBar>', () => {
  describe('Given classname and percent', () => {
    beforeEach(() => {
      root = document.createElement('div');
      ReactDOM.render(
        <ProgressBar className={'inactive'} percent={90} />,
        root,
      );
    });
    it('then renders div', () => {
      expect(root.childNodes[0].nodeName).toEqual('DIV');
    });
    it('then renders classNames cprogress-bar inactive/ ', () => {
      expect(root.childNodes[0].className).toMatch(/progress-bar inactive/);
    });
  });

  describe('Given percent', () => {
    beforeEach(() => {
      root = document.createElement('div');
      ReactDOM.render(<ProgressBar className={''} percent={90} />, root);
    });
    it('then renders H2', () => {
      expect(root.childNodes[0].nodeName).toEqual('DIV');
    });
    it('then renders classNames clock inactive ', () => {
      expect(root.childNodes[0].className).toMatch(/progress-bar/);
    });
  });
});
