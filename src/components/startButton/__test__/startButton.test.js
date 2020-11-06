import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import StartButton from "../startButton";
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

it("renders with or without some text", () => {
    act(() => {
        render(<StartButton/>, container);
    });
    expect(container.textContent).toBe("Begin");
    act(() => {
        render(<StartButton text="Register your visit"/>, container);
    });
    expect(container.textContent).toBe("Register your visit");
    act(() => {
        render(<StartButton text="Employee login"/>, container);
    });
    expect(container.textContent).toBe("Employee login");
});

test('Renders button', () => {
    const component = renderer.create(
      <StartButton/>,
    );
    let test = component.toJSON();
    expect(test).toMatchSnapshot();
    
  });