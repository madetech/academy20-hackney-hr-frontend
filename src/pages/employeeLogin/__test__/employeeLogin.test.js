import React from "react";
import { render } from '@testing-library/react';
import EmployeeLogin from "../employeeLogin";

describe('Employee Login Page', () => {
    test("renders without crashing", () => {
        render(<EmployeeLogin />);
    })
})