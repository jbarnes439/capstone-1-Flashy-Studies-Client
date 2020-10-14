import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom'; 
import App from './App';
import Header from '../Header/Header';
import renderer from 'react-test-renderer';
import { expect } from 'chai';


configure({ adapter: new Adapter()})

describe('<App />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(<Header />));
  })
  // it('renders the UI as expected', () => {
  //   const tree = renderer
  //     .create(<MemoryRouter><App /></MemoryRouter>)
  //     .toJSON();
  //   expect(tree).toMatchSnapShot();
  // });
})