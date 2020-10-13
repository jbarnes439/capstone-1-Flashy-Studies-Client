// import React from 'react';
// const assert = require('assert');
// import  ReactDOM from 'react-dom';
// import { shallow } from 'enzyme';
// import { MemoryRouter } from 'react-router-dom';
// import Header from './Header';

// describe('', () => {
//   it('', () => {

//   });
// });


import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ReactDOM from 'react-dom';
import Header from './Header';
// import { expect } from 'chai';

configure({ adapter: new Adapter()})

describe('<Header />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(<h1>Flashy <span>Studies!</span></h1>))
  })
})