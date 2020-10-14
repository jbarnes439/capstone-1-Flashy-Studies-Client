import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginPage from './LoginPage';
// import { expect } from 'chai';

configure({ adapter: new Adapter()})

describe('<LoginPage />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper.find(<h2>Login</h2>))
  })
})