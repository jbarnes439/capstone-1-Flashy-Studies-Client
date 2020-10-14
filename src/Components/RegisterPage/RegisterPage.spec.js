import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RegisterPage from './RegisterPage';



configure({ adapter: new Adapter()})

describe('<RegisterPage />', () => {
  it('should render without crashing', () => {
    shallow(<RegisterPage />);    
  })
})