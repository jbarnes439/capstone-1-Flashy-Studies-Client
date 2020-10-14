import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RegisterPage from './Register-Page';
// import { expect } from 'chai';

configure({ adapter: new Adapter()})

describe('<LoginPage />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<RegisterPage />);
    expect(wrapper.find(<h2>Register here!</h2>))
  })
})