import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserHomePage from './UserHomePage';
// import { expect } from 'chai';

configure({ adapter: new Adapter()})

describe('<UserHomePage />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<UserHomePage />);
    expect(wrapper.find())
  })
})