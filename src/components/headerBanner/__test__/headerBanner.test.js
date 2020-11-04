import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import renderer from 'react-test-renderer';
import HeaderBanner from '../headerBanner';

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

describe("headerBanner", () => {
    test('renders the header banner without crashing', () => {
      render(<HeaderBanner />, container);
    });
    test('is rendered consistently in UI', () => {
        const component = renderer.create(
          <HeaderBanner />,
        );
        let test = component.toJSON();
        expect(test).toMatchSnapshot();
    });
})

