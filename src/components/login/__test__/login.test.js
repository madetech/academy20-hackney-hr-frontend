import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../login';

test('Login form is rendered', () => {
  const component = renderer.create(
    <Login />,
  );
  let test = component.toJSON();
  expect(test).toMatchSnapshot();
  
});