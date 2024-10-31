import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App renders without crashing', () => {
  render(<App />);
});

test('App renders a div with the class App-header', () => {
  const { container } = render(<App />);
  expect(container.getElementsByClassName('App-header').length).toBe(1);
});

test('App renders a div with the class App-body', () => {
  const { container } = render(<App />);
  expect(container.getElementsByClassName('App-body').length).toBe(1);
});

test('App renders a div with the class App-footer', () => {
  const { container } = render(<App />);
  expect(container.getElementsByClassName('App-footer').length).toBe(1);
});
