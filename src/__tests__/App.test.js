import React from 'react';
// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import App from '../App';

configure({ adapter: new Adapter() });




it('renders without crashing', () => {
  shallow(<App />);
});