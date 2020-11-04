import React from 'react';
import SubmitButton from '../submitButton/submitButton';

export default function VisitorForm() {
    return (
        <div>
            <form data-testid="visitor-form">
                <label htmlFor="fname">First name:</label><br/>
                <input type="text" id="fname" name="fname"/><br/>
                <label htmlFor="lname">Last name:</label><br/>
                <input type="text" id="lname" name="lname"/><br/>
                <label htmlFor="ename">Employee name:</label><br/>
                <input type="text" id="ename" name="ename"/><br/>
                <label htmlFor="cnumber">Contact number:</label><br/>
                <input type="text" id="cnumber" name="cnumber"/><br/>
                <label htmlFor="time">Time of arrival:</label><br/>
                <input type="text" id="time" name="time"/><br/><br/>
                <SubmitButton/>
            </form>
    </div>
    )
}