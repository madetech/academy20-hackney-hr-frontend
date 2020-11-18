//move section here from App
import React from 'react';
import { Link } from "react-router-dom";
import StartButton from "../../components/startButton/startButton";

export default function Home() {
    return (
        <section>
            <div className="welcome-text">
                <h1>Welcome to the Hackney Council HR System.</h1>
                <p>If you are a visitor with a pre-booked appointment, please register your visit by clicking the button below.
            Once you have registered your visit, the person who you booked a visit with will soon come and collect you.</p>
                <p>If you are an employee of Hackney Council, please login using the button below.</p>
            </div>

            <div className="button-container">
                <Link to="/visitor">
                    <StartButton text="Register your visit" />
                </Link>
                <Link to="/login">
                    <StartButton text="Employee login" />
                </Link>
            </div>
        </section>
    )
}
