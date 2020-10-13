import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import App from './App';
import Header from '../Header/Header';


configure({ adapter: new Adapter()})

describe('<App />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(<Header />))
  })
})