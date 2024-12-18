import React from 'react';
import { shallow } from 'enzyme'; // Ensure you have Enzyme installed and configured
import Header from './Header';

describe('<Header />', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('renders an img and h1 tag', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('h1').length).toBe(1);
  });
});