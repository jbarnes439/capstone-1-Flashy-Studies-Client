import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LandingPage from './LandingPage';



configure({ adapter: new Adapter()})

describe('<LandingPage />', () => {
  it('should render without crashing', () => {
    shallow(<LandingPage />);    
  })
})
