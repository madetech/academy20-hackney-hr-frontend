import React from "react";
import { render } from '@testing-library/react';
import VisitorPage from "../visitorPage";

describe('Visitor Page', () => {
    test("renders without crashing", () => {
        render(<VisitorPage />);
    })
})
