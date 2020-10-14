import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CardBack from './CardBack';

configure({ adapter: new Adapter()})

describe('<CardBack />', () => {
  it('should render without crashing', () => {
    shallow(<CardBack />);    
  })
})