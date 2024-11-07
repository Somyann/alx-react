// src/Header/Header.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('contains an img tag', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img')).toHaveLength(1); // Adjust according to your component
  });

  it('contains an h1 tag', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1')).toHaveLength(1); // Adjust according to your component
  });
});
