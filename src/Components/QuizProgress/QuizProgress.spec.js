import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import QuizProgress from './QuizProgress';



configure({ adapter: new Adapter()})

describe('<QuizProgress />', () => {
  it('should render without crashing', () => {
    shallow(<QuizProgress />);    
  })
})