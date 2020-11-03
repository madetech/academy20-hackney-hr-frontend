import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import LoginName from "../loginName.js";

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

it("renders with or without a name", () => {
    act(() => {
        render(<LoginName/>, container);
    });
    expect(container.textContent).toBe("Hello, Employee");
    act(() => {
        render(<LoginName name="Bella Cockrell"/>, container);
    });
    expect(container.textContent).toBe("Bella Cockrell");
});

