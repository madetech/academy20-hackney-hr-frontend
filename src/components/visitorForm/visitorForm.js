import React, { useState } from 'react';
import SubmitButton from '../submitButton/submitButton';

export default function VisitorForm() {
    const [submit, setSubmit] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmit("Form submitted!")
    }
    return (
        <div>
            <form onSubmit={handleSubmit} data-testid="visitor-form">
                <label htmlFor="fname">Your first name:</label><br/>
                <input type="text" id="fname" name="fname"/><br/>
                <label htmlFor="lname">Your last name:</label><br/>
                <input type="text" id="lname" name="lname"/><br/>
                <label htmlFor="cnumber">Your contact number:</label><br/>
                <input type="text" id="cnumber" name="cnumber"/><br/>
                <label htmlFor="ename">The employee you are<br/>visiting:</label><br/>
                <input type="text" id="ename" name="ename"/><br/>
                <label htmlFor="time">Time of arrival (24hr):</label><br/>
                <input className="input-time" type="time" id="time" name="time"/><br/><br/>
                <SubmitButton/><div>{submit}</div>
            </form>
    </div>
    )
}