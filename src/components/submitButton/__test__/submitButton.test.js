import React from 'react';
import renderer from 'react-test-renderer';
import SubmitButton from '../submitButton';

test('Button is rendered', () => {
  const component = renderer.create(
    <SubmitButton />,
  );
  let test = component.toJSON();
  expect(test).toMatchSnapshot();
  
});