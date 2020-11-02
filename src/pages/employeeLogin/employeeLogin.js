import React from 'react';
import "./employeeLogin.css"
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function EmployeeLogin() {
    return(
        <div>
            <Router>
            <section>
                <div className="welcome-text">
                    <h1>Employee Login</h1>
                    <p>Please enter your credentials. If you have forgotten your password, too bad.</p>
                </div>
                <form data-testid="visitor-form">
                    <label for="email">Email:</label><br/>
                    <input type="text" id="email" name="email"/><br/>
                    <label for="password">Password:</label><br/>
                    <input type="password" id="password" name="password"/><br/>
                    <Link to="/login/details">
                        <input type="submit" value="Submit"></input>
                    </Link>
                </form>
            </section>
            </Router>
        </div>
    )
}