import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import QuizPage from './QuizPage';



configure({ adapter: new Adapter()})

describe('<QuizPage />', () => {
  it('should render without crashing', () => {
    shallow(<QuizPage />);    
  })
})