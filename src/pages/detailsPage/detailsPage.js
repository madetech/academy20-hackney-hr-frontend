import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "../../components/details/details";
import "../detailsPage/detailsPage.css";
import AllEmployees from '../../pages/allEmployeesPage/allEmployees'

export default function DetailsPage() {

    return (
        <div>

            <div className="nav-bar">
            <div>
                <div id="details">My Details</div>
                <div id="employees">Employees</div>
                <div id="visitors">Visitors</div>
                </div>
            </div>
            <div>
            {/* <Details /> */}
            <AllEmployees />
            </div>
        </div>
    )
}

