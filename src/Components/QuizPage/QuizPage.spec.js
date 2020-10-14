import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import QuizPage from './QuizPage';
// import { expect } from 'chai';

configure({ adapter: new Adapter()})

describe('<QuizPage />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<QuizPage />);
    expect(wrapper.find(<div className='quizTitle'><h2>Quick Quiz</h2></div>))
  })
})