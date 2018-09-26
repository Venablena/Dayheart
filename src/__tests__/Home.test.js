import React from 'react';
import Home from '../components/Home';
describe('Home', () => {
  it('renders without crashing', () => {
    const component = shallow(<Home />);
    expect(component).toMatchSnapshot();
  });

});
