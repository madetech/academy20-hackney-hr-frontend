import React from "react";
import ReactDOM from "react-dom";
import VisitorPage from "../visitorPage";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<VisitorPage/>, div)
})