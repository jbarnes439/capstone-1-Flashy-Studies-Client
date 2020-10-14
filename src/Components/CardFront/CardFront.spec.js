import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CardFront from './CardFront';



configure({ adapter: new Adapter()})

describe('<CardFront />', () => {
  it('should render without crashing', () => {
    shallow(<CardFront />);    
  })
})