import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import QuizProgress from './QuizProgress';
// import { expect } from 'chai';

configure({ adapter: new Adapter()})

describe('<LoginPage />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<QuizProgress />);
    expect(wrapper.contains(<section className='quizProgress'></section>))
  })
})