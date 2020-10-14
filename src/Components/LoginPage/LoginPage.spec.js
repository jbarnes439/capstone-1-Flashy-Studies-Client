import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginPage from './LoginPage';



configure({ adapter: new Adapter()})

describe('<LoginPage />', () => {
  it('should render without crashing', () => {
    shallow(<LoginPage />);    
  })
})