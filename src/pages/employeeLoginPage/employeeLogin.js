import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../../components/login/login";
import Details from "../../components/details/details";
import DetailsPage from "../detailsPage/detailsPage";

export default function EmployeeLoginPage() {
    const [isLoggedIn, setIsLoggedIn ] = useState(false);
    const [id, setId ] = useState("");

    return(
        <div>
            <Router>
                <Switch>
                        <Route 
                            exact route="/login"
                            render={props => (isLoggedIn ?
                                <DetailsPage id={id}/> :
                                <Login {...props} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setId={setId} />
                            )}
                        />

                </Switch>
            </Router>
        </div>
    )
}