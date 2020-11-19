import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "../../components/details/details";

export default function DetailsPage() {
    return (
        <div>

            <div className="nav-bar">
                <span> My Details </span>
                <span> Employees List </span>
                <span> Visitors </span>
            </div>
        </div>
    )
}

