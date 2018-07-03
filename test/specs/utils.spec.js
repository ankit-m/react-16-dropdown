import { expect } from 'chai';
import { stub, spy } from 'sinon';

import { getAbsoluteBoundingRect, optimizedResize } from '../../src/utils';

describe('getAbsoluteBoundingRect', function () {
  it('should return an object if keys left, top, right, bottom, height', function () {
    const el = { getBoundingClientRect: () => ({}) };

    expect(getAbsoluteBoundingRect(el)).to.have.keys([
      'left',
      'top',
      'right',
      'bottom',
      'height',
    ]);
  });

  it('should call getBoundingClientRect on the element passed', function () {
    const el = { getBoundingClientRect: stub().returns({}) };

    getAbsoluteBoundingRect(el);

    expect(el.getBoundingClientRect.calledOnce).to.be.true;
  });

  it('should add window.scrollX to bounding client left', function () {
    const el = { getBoundingClientRect: () => ({ left: 2 }) };
    const oldScroll = window.scrollX;

    window.scrollX = 3;

    expect(getAbsoluteBoundingRect(el).left).to.equal(5);

    window.scrollX = oldScroll;
  });

  it('should add window.scrollY to bounding client top', function () {
    const el = { getBoundingClientRect: () => ({ top: 2 }) };
    const oldScroll = window.scrollY;

    window.scrollY = 3;

    expect(getAbsoluteBoundingRect(el).top).to.equal(5);

    window.scrollY = oldScroll;
  });
});

describe('optimizedResize', function () {
  it('should return an object with add method', function () {
    expect(optimizedResize).to.have.property('add');
  });

  it('should add a resize listener to window', function () {
    const cb = () => {};

    spy(window, 'addEventListener');
    optimizedResize.add(cb);

    expect(window.addEventListener.calledOnce).to.be.true;
    expect(window.addEventListener.calledWith('resize', cb));
  });
});
