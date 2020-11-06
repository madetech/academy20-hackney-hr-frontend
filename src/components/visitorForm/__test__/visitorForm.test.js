import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { screen } from '@testing-library/react';
import VisitorForm from '../visitorForm';
import renderer from 'react-test-renderer';

let container = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null
});

describe("visitorForm", () => {
    test('renders the visitor form without crashing', () => {
      render(<VisitorForm />, container);
    });
    test('renders the form', () => {
        render(<VisitorForm />, container);
        const formElement = screen.getByText(/First name:/i);
        expect(formElement).toBeInTheDocument();
      });
})

test('Visitor form is rendered', () => {
  const component = renderer.create(
    <VisitorForm />,
  );
  let test = component.toJSON();
  expect(test).toMatchSnapshot();
  
});