import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Details from "../details";

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

it("renders with or without some text", () => {
    act(() => {
        render(<Details/>, container);
    });
    expect(container.textContent).toBe("Maribeth");
});