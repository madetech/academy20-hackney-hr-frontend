import React from 'react';
import "./headerBanner.css";
import { ReactComponent as Logo } from "../../images/hackney-logo.svg";

export default function HeaderBanner() {
    return (
        <header>
        <div className="header-inner">
        <div className="logo">
            <Logo/>
        </div>
        </div>
        <div className="header-lines"></div>
        </header>
    );
}
