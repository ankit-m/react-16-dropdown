import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import { spy } from 'sinon';

import Trigger, { TriggerRenderer } from '../../src/Trigger';

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
    const keyDownHandler = spy();
    const wrapper = mount(<Trigger onClick={clickHandler} onKeyDown={keyDownHandler} />);

    expect(clickHandler.callCount).to.equal(0);
    expect(keyDownHandler.callCount).to.equal(0);
    wrapper.unmount();
  });

  it('should not call handlers while unmounting', function () {
    const clickHandler = spy();
    const keyDownHandler = spy();
    const wrapper = mount(<Trigger onClick={clickHandler} onKeyDown={keyDownHandler} />);

    wrapper.unmount();
    expect(clickHandler.callCount).to.equal(0);
    expect(keyDownHandler.callCount).to.equal(0);
  });

  it('should render a div with \'trigger\' classname', function () {
    const wrapper = shallow(<Trigger />);

    expect(wrapper.find('div.trigger')).to.have.lengthOf(1);
  });

  it('should render TriggerRenderer by default', function () {
    const wrapper = shallow(<Trigger />);

    expect(wrapper.find(TriggerRenderer)).to.have.lengthOf(1);
  });

  it('should have a button role attribute', function () {
    const wrapper = shallow(<Trigger />);

    expect(wrapper.prop('role')).to.equal('button');
  });

  it('should call the click handler on clicking', function () {
    const clickHandler = spy();
    const wrapper = mount(<Trigger onClick={clickHandler} />);

    expect(clickHandler.callCount).to.equal(0);
    wrapper.simulate('click');
    expect(clickHandler.callCount).to.equal(1);
    wrapper.unmount();
  });

  it('should call the key down handler on keyboard interaction', function () {
    const keyDownHandler = spy();
    const wrapper = mount(<Trigger onKeyDown={keyDownHandler} />);

    expect(keyDownHandler.callCount).to.equal(0);
    wrapper.simulate('keydown');
    expect(keyDownHandler.callCount).to.equal(1);
    wrapper.unmount();
  });

  it('should use custom renderer passed', function () {
    const TestRenderer = () => <button className='test-btn'>test button</button>;
    const wrapper = mount(<Trigger renderer={TestRenderer} />);

    expect(wrapper.find(TestRenderer)).to.have.lengthOf(1);
    wrapper.unmount();
  });

  it('should attach the passed ref');
});

describe('<TriggerRenderer />', function () {
  it('should mount without errors', function () {
    const wrapper = mount(<TriggerRenderer />);

    expect(wrapper.find('button')).to.have.lengthOf(1);
    wrapper.unmount();
  });

  it('should unmount without errors', function () {
    const wrapper = mount(<TriggerRenderer />);

    wrapper.unmount();
    expect(wrapper.find('button')).to.have.lengthOf(0);
  });

  it('should be disabled when disabled prop is set', function () {
    const wrapper = shallow(<TriggerRenderer disabled />);

    expect(wrapper.prop('disabled')).to.be.true;
  });

  it('should render a button with classname \'trigger-renderer\'', function () {
    const wrapper = shallow(<TriggerRenderer />);

    expect(wrapper.find('button.trigger-renderer')).to.have.lengthOf(1);
  });

  it('should render the label passed', function () {
    const wrapper = shallow(<TriggerRenderer label='test' />);

    expect(wrapper.text()).to.equal('test');
  });
});
