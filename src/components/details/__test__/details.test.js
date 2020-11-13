import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { fireEvent, waitFor, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import Details from "../details";

// const server = setupServer(
//     rest.get('/details'), (req, res, ctx) => {
//         return res(ctx.json( { first_name: "Maribeth" }))
//     }
// )
// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers()) 
// afterAll(() => server.close())

// test('render user first name', async () => {
//     render(<Details url='/details'/>)
// })

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
    expect(container.textContent).toContain("Name:");
});

// make asynchronous 
// it("renders with or without some text", () => {
//     act(() => {
//         render(<Details/>, container);
//     });
//     expect(container.textContent).toBe("Maribeth");
// });