import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FlashCardContainer from './FlashCardContainer';


configure({ adapter: new Adapter()})

// describe.only('<FlashCardContainer />', () => {
//   it('should render without crashing', () => {    
//     shallow(<FlashCardContainer />); 
//   })
// })

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FlashCardContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});