import React from "react";
import { render } from '@testing-library/react';
import EmployeeDetails from "../employeeDetails";

describe('Employee Details Page', () => {
    test("renders without crashing", () => {
        render(<EmployeeDetails />);
    })
})