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
import Header from './Header';

configure({ adapter: new Adapter()})

describe('<Header />', () => {
  it('should render without crashing', () => {
    shallow( <Header />);    
  })
})