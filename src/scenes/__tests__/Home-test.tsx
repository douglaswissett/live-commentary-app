// __tests__/Intro-test.js
import React from 'react';
import * as ShallowRenderer from 'react-test-renderer/shallow';
import Home from '../Home';

test('renders correctly', () => {
  const renderer = ShallowRenderer.createRenderer();
  const tree = renderer.render(<Home />);
  expect(tree).toMatchSnapshot();
});
