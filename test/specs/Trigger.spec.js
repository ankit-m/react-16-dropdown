import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';

import Trigger from '../../src/Trigger';

describe('<Trigger />', function () {
  it('should mount without errors', function () {
    const wrapper = mount(<Trigger />);

    expect(wrapper.find('button')).to.have.lengthOf(1);
    wrapper.unmount();
  });

  it('should unmount without errors', function () {
    const wrapper = mount(<Trigger />);

    wrapper.unmount();
    expect(wrapper.find('button')).to.have.lengthOf(0);
  });

  it('should not call handlers while mounting', function () {
    const clickHandler = spy();
    const wrapper = mount(<Trigger onClick={clickHandler} />);

    expect(clickHandler.callCount).to.equal(0);
    wrapper.unmount();
  });

  it('should not call handlers while unmounting', function () {
    const clickHandler = spy();
    const wrapper = mount(<Trigger onClick={clickHandler} />);

    wrapper.unmount();
    expect(clickHandler.callCount).to.equal(0);
  });
});
