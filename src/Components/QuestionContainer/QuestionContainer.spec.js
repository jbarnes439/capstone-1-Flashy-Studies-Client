import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import QuestionContainer from './QuestionContainer';



configure({ adapter: new Adapter()})

describe('<QuestionContainer />', () => {
  it('should render without crashing', () => {
    shallow(<QuestionContainer />);    
  })
})