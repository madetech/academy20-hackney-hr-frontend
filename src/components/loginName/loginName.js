import React from 'react';
// let users = require("../../MOCK_DATA.json")

export default function LoginName(props) {
    if (props.name) {
        return(
            <h1>{props.name}</h1>
        )
    } else {
        return(
            <h1>Hello, Employee</h1>
        );
    };
};