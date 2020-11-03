import React from 'react';
import "./headerBanner.css";
import { ReactComponent as Logo } from "../../images/hackney-logo.svg";
import LoginName from "../loginName/loginName"
let users = require("../../MOCK_DATA.json")

export default function HeaderBanner() {
    return (
        <header>
        <div className="header-inner">
        <div className="logo">
            <Logo/>
            <LoginName name={nameConcatenator(users)}/>
        </div>
        </div>
        <div className="header-lines"></div>
        </header>
    );
}
const nameConcatenator = user => {
    return (
        user[0].first_name + " " + user[0].last_name
    ) 
}

