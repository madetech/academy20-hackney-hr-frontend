import React from "react";
import { render, screen } from '@testing-library/react';
import EmployeeDetails from "../employeeDetails";

describe('Employee Details Page', () => {
    test("renders without crashing", () => {
        render(<EmployeeDetails />);
    })
    test('renders the first name of the first employee', () => {
        render(<EmployeeDetails />);
        const linkElement = screen.getByText(/Lenette Enrique/i);
        expect(linkElement).toBeInTheDocument();
      });
})
