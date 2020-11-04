import React from 'react';
import "./employeeLogin.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EmployeeDetails from "../employeeDetailsPage/employeeDetails";
import SubmitButton from '../../components/submitButton/submitButton';

export default function EmployeeLogin() {
    return(
        <div>
            <Router>
                <Switch>
                        <Route exact path="/details" component={EmployeeDetails}/>
                        <section>
                            <div className="welcome-text">
                                <h1>Employee Login</h1>
                                <p>Please enter your credentials. If you have forgotten your password, too bad.</p>
                            </div>
                            <form data-testid="visitor-form">
                                <label htmlFor="email">Email:</label><br/>
                                <input type="text" id="email" name="email"/><br/>
                                <label htmlFor="password">Password:</label><br/>
                                <input type="password" id="password" name="password"/><br/>
                                <Link to="/details">
                                    <SubmitButton/>
                                </Link>
                            </form>
                        </section>
                </Switch>
            </Router>
        </div>
    )
}