import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RegistrationForm from './RegistrationForm';

configure({ adapter: new Adapter()})

describe('<RegistrationForm />', () => {
  it('should render without crashing', () => {
    shallow(<RegistrationForm />);    
  })
})