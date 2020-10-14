import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LandingPage from './LandingPage';
// import { expect } from 'chai';

configure({ adapter: new Adapter()})

describe('<LandingPage />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper.find(<h1>Welcome to Flashy <span>Studies!</span></h1>))
  })
})
