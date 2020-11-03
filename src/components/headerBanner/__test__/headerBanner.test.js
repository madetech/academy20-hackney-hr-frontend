import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
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
})
