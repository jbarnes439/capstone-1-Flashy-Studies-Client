import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FlashCardContainer from './FlashCardContainer';


configure({ adapter: new Adapter()})

describe('<FlashCardContainer />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<FlashCardContainer />);
    expect(wrapper.find(<h2> Study Flash Cards </h2>))
  })
})