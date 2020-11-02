import React from "react";
import { render, screen } from '@testing-library/react';
import EmployeeDetails from "../employeeDetails";

describe('Employee Details Page', () => {
    test("renders without crashing", () => {
        render(<EmployeeDetails />);
    })
    test('renders the first name of the employee', () => {
        render(<EmployeeDetails />);
        const linkElement = screen.getByText(/Lenette/i);
        expect(linkElement).toBeInTheDocument();
      });
      test('renders the job title of the first employee', () => {
        render(<EmployeeDetails />);
        const linkElement = screen.getByText(/Assistant Manager/i);
        expect(linkElement).toBeInTheDocument();
      });
})
