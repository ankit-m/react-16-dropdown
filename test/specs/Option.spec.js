import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import { spy } from 'sinon';

import Option, { OptionRenderer } from '../../src/Option';

describe('<OptionRenderer />', function () {
  it('should mount without errors', function () {
    const wrapper = mount(<OptionRenderer />);

    expect(wrapper.find('div')).to.have.lengthOf(1);
    wrapper.unmount();
  });

  it('should unmount without errors', function () {
    const wrapper = mount(<OptionRenderer />);

    wrapper.unmount();
    expect(wrapper.find('div')).to.have.lengthOf(0);
  });

  it('should render a div with \'option\' className', function () {
    const wrapper = shallow(<OptionRenderer />);

    expect(wrapper.find('div.option')).to.have.lengthOf(1);
  });

  it('should append focused class if the focused prop is true', function () {
    const wrapper = shallow(<OptionRenderer focused />);

    expect(wrapper.find('div.focused')).to.have.lengthOf(1);
  });

  it('should append custom className', function () {
    const wrapper = shallow(<OptionRenderer className='test' />);

    expect(wrapper.find('div.test')).to.have.lengthOf(1);
  });

  it('should render the label', function () {
    const wrapper = shallow(<OptionRenderer label='label' />);

    expect(wrapper.text()).to.equal('label');
  });
});

describe('<Option />', function () {
  it('should mount without errors', function () {
    const wrapper = mount(<Option />);

    expect(wrapper.find('div').exists()).to.be.true;
    wrapper.unmount();
  });

  it('should unmount without errors', function () {
    const wrapper = mount(<Option />);

    wrapper.unmount();
    expect(wrapper.find('div').exists()).to.be.false;
  });

  it('should render a div', function () {
    const wrapper = shallow(<Option />);

    expect(wrapper.find('div')).to.have.lengthOf(1);
  });

  it('should have an option role', function () {
    const wrapper = shallow(<Option />);

    expect(wrapper.prop('role')).to.equal('option');
  });

  it('should have tab index of -1', function () {
    const wrapper = shallow(<Option />);

    expect(wrapper.prop('tabIndex')).to.equal(-1);
  });

  it('should set aria-selected attribute to focused', function () {
    const wrapper = shallow(<Option focused />);

    expect(wrapper.prop('aria-selected')).to.be.true;
  });

  it('should call the onClick handler when clicked', function () {
    const clickHandler = spy();
    const wrapper = mount(<Option onClick={clickHandler} label='test' />);

    wrapper.simulate('click');
    expect(clickHandler.calledOnce).to.be.true;
    wrapper.unmount();
  });

  it('should use default renderer when no custom renderer is passed', function () {
    const wrapper = shallow(<Option />);

    expect(wrapper.find(OptionRenderer)).to.have.lengthOf(1);
  });

  it('should use custom renderer which is passed', function () {
    const Renderer = () => <span>label</span>;
    const wrapper = shallow(<Option renderer={Renderer} />);

    expect(wrapper.find(Renderer)).to.have.lengthOf(1);
  });
});
