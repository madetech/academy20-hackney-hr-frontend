import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import headerBanner from "../headerBanner";

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

