import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserHomePage from './UserHomePage';

configure({ adapter: new Adapter()})

describe('<UserHomePage />', () => {
  it('should render without crashing', () => {
    shallow(<UserHomePage />);    
  })
})