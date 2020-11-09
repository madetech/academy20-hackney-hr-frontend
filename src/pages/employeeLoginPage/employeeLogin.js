import React, { useState } from 'react';
import { useEffect } from "react";
// import "./employeeLogin.css"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import EmployeeDetails from "../employeeDetailsPage/employeeDetails";
import Login from "../../components/login/login"
import SubmitButton from '../../components/submitButton/submitButton';

export default function EmployeeLoginPage() {
    const [isLoggedIn, setIsLoggedIn ] = useState(false);
    const [id, setId ] = useState("");

    // useEffect(() => {
    //     console.log(isLoggedIn);
    // }, [setIsLoggedIn])

    return(
        <div>
            <Router>
                <Switch>
                        <Route 
                            exact route="/login"
                            render={props => (isLoggedIn ?
                                <Redirect to="/details"/> :
                                <Login {...props} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setId={setId} />
                            )}
                        />
                        <Route exact route="/details" component={EmployeeDetails}/>

                </Switch>
            </Router>
        </div>
    )
}