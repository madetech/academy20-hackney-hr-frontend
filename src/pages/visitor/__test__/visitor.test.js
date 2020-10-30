import React from "react";
import { render } from '@testing-library/react';
import VisitorPage from "../visitorPage";

describe('Visitor Page', () => {
    test("renders without crashing", () => {
        render(<VisitorPage />);
    })
})

describe('true is truthy and false is falsy', () => {
    test('true is truthy', () => {
      expect(true).toBe(true);
    });
   
    test('false is falsy', () => {
      expect(false).toBe(false);
    });
  });